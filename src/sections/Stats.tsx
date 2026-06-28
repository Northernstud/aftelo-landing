import { site } from "@/content/site";
import type { Stat } from "@/content/site";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassPanel } from "@/components/primitives/GlassPanel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import "./Stats.css";

/**
 * Proof numbers on a single glass panel. Each value counts up from 0 on
 * first view (§8), with ease-out over the "slow" token.
 */
export function Stats() {
  const { eyebrow, title, sub, items } = site.stats;
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.4 });

  return (
    <section className="section stats" id="numbers">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

        <GlassPanel className="stats__panel" ref={ref as never}>
          <div className="stats__grid">
            {items.map((stat) => (
              <StatItem key={stat.id} stat={stat} active={visible} />
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, {
    active,
    decimals: stat.decimals ?? 0,
    duration: 900,
  });

  return (
    <div className="stat">
      <p className="stat__value">
        {stat.prefix}
        {value}
        {stat.suffix}
      </p>
      <p className="stat__label">{stat.label}</p>
    </div>
  );
}
