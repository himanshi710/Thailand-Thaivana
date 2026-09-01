import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ================= TOP CTA ================= */}

      <div className="footer-cta">

        <div className="container footer-cta-inner">

          <div className="footer-cta-content">

            <span className="footer-eyebrow">
              READY FOR THAILAND?
            </span>

            <h2>
              Your next
              <br />
              <em>story starts here.</em>
            </h2>

          </div>

          <Link to="/contact" className="footer-cta-button">
            Plan My Trip
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>


      {/* ================= MAIN FOOTER ================= */}

      <div className="footer-main">

        <div className="container footer-grid">

          {/* BRAND */}

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              THAI<span>VANA</span>
            </Link>

            <p>
              Curated journeys through Thailand's
              most beautiful places, flavours and
              unforgettable experiences.
            </p>

            <div className="footer-socials">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                FB
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                YT
              </a>

            </div>

          </div>


          {/* EXPLORE */}

          <div className="footer-column">

            <h4>EXPLORE</h4>

            <Link to="/destinations">
              Destinations
            </Link>

            <Link to="/experiences">
              Experiences
            </Link>

            <Link to="/culture">
              Thai Culture
            </Link>

            <Link to="/food">
              Thai Food
            </Link>

          </div>


          {/* DISCOVER */}

          <div className="footer-column">

            <h4>DISCOVER</h4>

            <Link to="/packages">
              Travel Packages
            </Link>

            <Link to="/journal">
              Travel Journal
            </Link>

            <Link to="/bangkok">
              Bangkok
            </Link>

            <Link to="/phuket">
              Phuket
            </Link>

          </div>


          {/* CONTACT */}

          <div className="footer-contact">

            <h4>GET IN TOUCH</h4>

            <a href="mailto:hello@thaivana.com">
              <Mail size={16} />
              hello@thaivana.com
            </a>

            <a href="tel:+919999999999">
              <Phone size={16} />
              +91 99999 99999
            </a>

            <div className="footer-address">
              <MapPin size={16} />
              <span>
                Bangkok · Thailand
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} Thaivana.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link to="/">
              Privacy
            </Link>

            <Link to="/">
              Terms
            </Link>

            <a href="#top">
              Back to top ↑
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;