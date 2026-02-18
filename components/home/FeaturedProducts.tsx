import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Popular Software</h2>

      <div className="products-grid">
        <Link href="/products/sketchup" className="product-card">
          <h3>SketchUp Studio</h3>
          <p>3D modelling made simple.</p>
        </Link>

        <Link href="/products/zwcad-2026" className="product-card">
          <h3>ZWCAD 2026</h3>
          <p>Powerful CAD at affordable pricing.</p>
        </Link>

        <Link href="/products/d5-render" className="product-card">
          <h3>D5 Render</h3>
          <p>Real-time rendering for designers.</p>
        </Link>
      </div>
    </section>
  );
}
