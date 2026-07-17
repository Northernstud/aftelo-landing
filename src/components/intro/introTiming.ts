/**
 * Intro timing + decode logic.
 *
 * Ported verbatim from src/animation/nuvyel_logo_animation.html, which is in
 * turn a port of the app's welcome_finale.dart / aftelo_logo_mark.dart. Keep
 * these constants in lockstep with that file so the web intro matches the app.
 *
 * TOTAL is the one knob; every phase below is a fraction of it, so the sequence
 * keeps its shape at any speed.
 */

export const TOTAL = 3000; // ms

/** Phase windows as [start, end] fractions of TOTAL. */
export const GLOW: readonly [number, number] = [0.0, 0.25];
export const LOGO: readonly [number, number] = [0.05, 0.5]; // mark draws across this
export const TITLE: readonly [number, number] = [0.52, 0.62]; // the line fades in…
export const DECODE: readonly [number, number] = [0.52, 0.95]; // …while "Nuvyel" resolves
export const SUB: readonly [number, number] = [0.88, 1.0];

/** The word that decodes out of noise (mirrors scramble_text.dart). */
export const WORD = "Nuvyel";
export const TICKS = 36;
export const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&$@?!*<>/";

/**
 * Each stroke's slice of the mark's own 0→1 progress. The last lands exactly at
 * 1.0, so the mark completes precisely as the wordmark begins.
 * Order matches the four <path> elements: outer arc, inner arc, baseline, underline.
 */
export const STROKES: ReadonlyArray<readonly [number, number]> = [
  [0.0, 0.57], // outer arc
  [0.21, 0.71], // inner arc
  [0.5, 0.89], // baseline
  [0.71, 1.0], // underline
];

export const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/** Maps overall progress onto one phase's window, eased. Clamps outside it. */
export const seg = (
  v: number,
  [a, b]: readonly [number, number],
  ease: (t: number) => number = easeOutCubic
) => ease(clamp01((v - a) / (b - a)));

/**
 * One frame of the decode reveal. Character i locks in permanently once
 * progress passes (i + 1) / length, so the word settles left to right and the
 * last letter lands exactly at 1.0. Deterministic: the same progress always
 * yields the same frame, so replaying is stable.
 */
export function scrambleFrame(text: string, progress: number): string {
  const p = clamp01(progress);
  if (p >= 1) return text;

  const tick = Math.floor(p * TICKS);
  let out = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      out += " ";
      continue;
    }
    if (p >= (i + 1) / text.length) {
      out += text[i];
      continue;
    }
    // Cheap deterministic hash of (position, tick) → glyph. Every step is
    // forced back to unsigned: `^` yields a *signed* int32 in JS, and a
    // negative modulo would index off the end of GLYPHS and read undefined.
    let h = (0x811c9dc5 ^ (i * 73856093) ^ (tick * 19349663)) >>> 0;
    h = (h ^ (h >>> 13)) >>> 0;
    h = Math.imul(h, 0x5bd1e995) >>> 0;
    h = (h ^ (h >>> 15)) >>> 0;
    out += GLYPHS[h % GLYPHS.length];
  }
  return out;
}
