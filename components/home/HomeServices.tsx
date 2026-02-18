import Link from "next/link";

export default function HomeServices() {
  return (
    <section className="home-services">
      <h2>What We Do</h2>

      <div className="services-grid">
        <Link href="/services/rendering" className="service-card">
          <h3>3D Rendering</h3>
          <p>High-quality architectural and product visualisation.</p>
        </Link>

        <Link href="/training" className="service-card">
          <h3>Online Training</h3>
          <p>SketchUp, V-Ray, BIM & professional CAD training.</p>
        </Link>

        <Link href="/products" className="service-card">
          <h3>Software Sales</h3>
          <p>SketchUp, ZWCAD, D5 Render & more.</p>
        </Link>

        <Link href="/services/web" className="service-card">
          <h3>Web Services</h3>
          <p>Modern websites for design & construction businesses.</p>
        </Link>
      </div>
    </section>
  );
}
