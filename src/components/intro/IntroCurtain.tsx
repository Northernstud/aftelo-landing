import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  TOTAL,
  GLOW,
  LOGO,
  TITLE,
  DECODE,
  SUB,
  WORD,
  STROKES,
  clamp01,
  easeInOut,
  seg,
  scrambleFrame,
} from "./introTiming";
import "./IntroCurtain.css";

const STORAGE_KEY = "nuvyel_intro_seen";
const HOLD_MS = 650; // pause on the finished lockup before closing
const FADE_MS = 550; // overlay fade-out (must match CSS transition)

type Phase = "playing" | "closing" | "gone";

/** True the first time this browser loads the page (or if storage is blocked). */
function shouldPlay(): boolean {
  try {
    return !window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return true; // private mode / storage disabled → just play it
  }
}

function markSeen() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

/**
 * First-load intro curtain: a full-screen overlay where the Nuvyel mark draws
 * itself on, the glow blooms, and "Welcome to Nuvyel" decodes out of noise —
 * a port of src/animation/nuvyel_logo_animation.html (see introTiming.ts).
 *
 * Plays once per visitor (remembered in localStorage), respects reduce-motion
 * by jumping to the finished frame, then fades out and unmounts to reveal the
 * page. Click anywhere to skip.
 */
export function IntroCurtain() {
  const reduced = useReducedMotion();
  // Decide up-front so return visits never flash the overlay.
  const [phase, setPhase] = useState<Phase>(() =>
    shouldPlay() ? "playing" : "gone"
  );

  const svgRef = useRef<SVGSVGElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase !== "playing") return;

    const svg = svgRef.current;
    const glow = glowRef.current;
    const title = titleRef.current;
    const word = wordRef.current;
    const sub = subRef.current;
    if (!svg || !glow || !title || !word || !sub) return;

    const paths = Array.from(
      svg.querySelectorAll<SVGPathElement>(".intro__stroke")
    );
    // Prime each stroke: dash it to its own length, then push it out of view.
    const lengths = paths.map((p) => p.getTotalLength());
    paths.forEach((p, i) => {
      p.style.strokeDasharray = String(lengths[i]);
      p.style.strokeDashoffset = String(lengths[i]);
    });

    function frame(v: number) {
      const logo = clamp01((v - LOGO[0]) / (LOGO[1] - LOGO[0])); // linear on purpose
      paths.forEach((p, i) => {
        const [a, b] = STROKES[i];
        const t = easeInOut(clamp01((logo - a) / (b - a)));
        // A round cap on a zero-length dash paints a dot. Nothing means nothing.
        p.style.visibility = t <= 0 ? "hidden" : "visible";
        p.style.strokeDashoffset = String(lengths[i] * (1 - t));
      });

      const g = seg(v, GLOW);
      glow!.style.opacity = String(g);
      glow!.style.transform = `scale(${0.5 + 0.5 * g})`;

      const ti = seg(v, TITLE);
      title!.style.opacity = String(ti);
      title!.style.transform = `translateY(${18 * (1 - ti)}px)`;

      // Linear decode, so the letters settle at an even cadence.
      word!.textContent = scrambleFrame(WORD, seg(v, DECODE, (t) => t));

      sub!.style.opacity = String(seg(v, SUB));
    }

    let raf = 0;
    let holdTimer = 0;

    const close = () => {
      markSeen();
      setPhase("closing");
    };
    const scheduleClose = (delay: number) => {
      holdTimer = window.setTimeout(close, delay);
    };

    if (reduced) {
      frame(1);
      scheduleClose(HOLD_MS);
    } else {
      let start: number | null = null;
      const step = (now: number) => {
        if (start === null) start = now;
        const v = clamp01((now - start) / TOTAL);
        frame(v);
        if (v < 1) {
          raf = requestAnimationFrame(step);
        } else {
          scheduleClose(HOLD_MS);
        }
      };
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(holdTimer);
    };
  }, [phase, reduced]);

  // Retire the overlay once the fade-out has run.
  useEffect(() => {
    if (phase !== "closing") return;
    const t = window.setTimeout(() => setPhase("gone"), FADE_MS);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`intro ${phase === "closing" ? "is-closing" : ""}`}
      role="presentation"
      onClick={() => phase === "playing" && (markSeen(), setPhase("closing"))}
      title="Skip"
    >
      <div className="intro__markbox">
        <div className="intro__glow" ref={glowRef} />
        {/* Geometry transcribed from public/nuvyel-logo.svg (512×512 viewBox). */}
        <svg
          className="intro__mark"
          ref={svgRef}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Nuvyel"
        >
          <defs>
            {/* userSpaceOnUse across the mark: both arcs share one ramp. */}
            <linearGradient
              id="intro-brand"
              x1="96"
              y1="144"
              x2="416"
              y2="368"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C953FF" />
              <stop offset="1" stopColor="#FF005E" />
            </linearGradient>
          </defs>
          <path
            className="intro__stroke"
            opacity="0.4"
            stroke="url(#intro-brand)"
            strokeWidth="37.3333"
            d="M96 304C96 261.565 112.857 220.869 142.863 190.863C172.869 160.857 213.565 144 256 144C298.435 144 339.131 160.857 369.137 190.863C399.143 220.869 416 261.565 416 304"
          />
          <path
            className="intro__stroke"
            stroke="url(#intro-brand)"
            strokeWidth="37.3333"
            d="M160 304C168.734 285.966 182.372 270.756 199.351 260.114C216.329 249.472 235.962 243.828 256 243.828C276.038 243.828 295.671 249.472 312.649 260.114C329.628 270.756 343.266 285.966 352 304"
          />
          <path
            className="intro__stroke"
            stroke="#F3F3F8"
            strokeWidth="32"
            d="M64 307H448"
          />
          <path
            className="intro__stroke"
            opacity="0.22"
            stroke="#F3F3F8"
            strokeWidth="26.6667"
            d="M149.333 368H362.667"
          />
        </svg>
      </div>

      {/* "Nuvyel" decodes out of noise; the words to its left stay still. */}
      <div className="intro__title" ref={titleRef}>
        Welcome to <span ref={wordRef}>Nuvyel</span>
      </div>
      <div className="intro__sub" ref={subRef}>
        Where you become yourself.
      </div>
    </div>
  );
}
