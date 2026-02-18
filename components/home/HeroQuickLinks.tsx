import Link from "next/link";

export default function HeroQuickLinks() {
  return (
    <section className="hero-quick-links">
      {/* ROW 1 */}
      <div className="quick-links-row">
        <Link href="/sketchup-2026-pricing" className="quick-btn">
          Latest SketchUp 2026 Pricing
        </Link>

        <Link href="/sketchup-2026-trial" className="quick-btn">
          SketchUp 2026 7-Day Trial
        </Link>

        <Link href="/sketchup-2026-new" className="quick-btn">
          SketchUp 2026 New Version
        </Link>
      </div>

      {/* ROW 2 */}
      <div className="quick-links-row center">
        <Link href="/previous-sketchup" className="quick-btn">
          Previous SketchUp Version
        </Link>

        <Link href="/d5-render" className="quick-btn">
          D5 Render
        </Link>
      </div>
    </section>
  );
}
