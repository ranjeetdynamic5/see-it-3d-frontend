import Image from "next/image";
import Link from "next/link";
import NewsletterStrip from "@/components/common/NewsletterStrip";

export default function Footer() {
  return (
    <>
      {/* ================= NEWSLETTER STRIP ================= */}
      {/* Footer ke upar overlap karega */}
      <div className="relative z-20 mt-24">
        <NewsletterStrip />
      </div>

      {/* ================= FOOTER ================= */}
      {/* pt-32 IMPORTANT: newsletter ke liye space */}
      <footer className="footer pt-32">
        <div className="footer-inner">
          
          {/* COLUMN 1 */}
          <div className="footer-col brand">
            <Image
              src="/seeit_logo.jpg"
              alt="SEE IT 3D"
              width={200}
              height={45}
            />

            <p>
              SEEIT3D is your trusted partner for cutting-edge 3D software,
              hardware, professional training and consultancy. From leading
              solutions like SketchUp, V-Ray, D5 Render, ZWCAD, Draftsight & MoI3D
              to custom workstations, expert-led training and web development, we
              empower designers, architects, and businesses across the UK and
              beyond. Let us help you bring your visions to life—your dreams, our
              skills!
            </p>

            <Link href="/shop" className="footer-buy-btn">
              BUY NOW – SEE-IT-3D-Webstore
            </Link>
          </div>

          {/* COLUMN 2 */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/testimonial">Testimonial</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/training">Online Training</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/sketchup">SketchUp</Link></li>
              <li><Link href="/extensions">Skp Extensions</Link></li>
              <li><Link href="/services">Web Services</Link></li>
              <li><Link href="/rendering">Rendering</Link></li>
              <li><Link href="/zxcad">ZWCAD</Link></li>
              <li><Link href="/d5-render">D5 Render</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="footer-col">
            <h4>Policies</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Services</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="footer-col contact">
            <h4>Contact Us</h4>

            <p>SEEIT3D ‘your dreams…our skills’</p>

            <p>
              For Hardware, software and SEEIT3D Support enquiries:<br />
              <strong>Email:</strong>{" "}
              <a href="mailto:info@seeit3d.co.uk">info@seeit3d.co.uk</a>
            </p>

            <p>
              For Training, Modelling, Visualisation, Drawing Consultancy and Web
              Design enquiries:<br />
              <strong>Email:</strong>{" "}
              <a href="mailto:jamesogston@seeit3d.co.uk">
                jamesogston@seeit3d.co.uk
              </a>
            </p>

            <p>
              <strong>Address:</strong><br />
              Third floor / 3 Hill Street, New Town, Edinburgh. EH2 3JP. UK
            </p>

            <p>
              <strong>Tel:</strong> 03331212187 / +12137874052
            </p>

            <div className="footer-call">
              <span>Need For Help? Call Us</span>
              <a href="tel:03331212187"> 03331212187</a>
            </div>
          </div>
        </div>

        {/* SOCIAL + COPYRIGHT */}
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.facebook.com/SeeIt3d" target="_blank">
              <Image src="/icons/fb.png" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://x.com/SeeIt3D" target="_blank">
              <Image src="/icons/x.png" alt="X" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/seeit3dwithjames/" target="_blank">
              <Image src="/icons/inta.png" alt="Instagram" width={40} height={40} />
            </a>
            <a href="https://www.youtube.com/user/SEEIT3D" target="_blank">
              <Image src="/icons/yt.png" alt="YouTube" width={40} height={40} />
            </a>
          </div>

          <p className="copyright">
            SEEIT3D – ‘Your Dreams Our Skills’ – Copyright©2026 – All Rights Reserved
          </p>

          <p className="footer-meta">
            www.see-it-3d.co.uk | 3D Design Software Sales | Training & Consultancy |
            CAD BIM Drawing | 3D Modelling and Rendering Services | Web Design Services
          </p>
        </div>
      </footer>
    </>
  );
}
