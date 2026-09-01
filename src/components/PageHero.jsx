import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./PageHero.css";

const PageHero = ({
  eyebrow = "DISCOVER THAILAND",
  title = "Explore",
  highlight = "Thailand.",
  description,
  image,
  buttonText = "Explore Destinations",
  buttonLink = "/destinations",
}) => {
  return (
    <section className="page-hero">

      {/* Background */}
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Overlay */}
      <div className="page-hero-overlay" />

      {/* Decorative Glow */}
      <div className="page-hero-glow page-hero-glow-one" />
      <div className="page-hero-glow page-hero-glow-two" />

      <div className="container page-hero-container">

        {/* Back / Label */}
        <div className="page-hero-top">

          <div className="page-hero-label">
            <span />
            {eyebrow}
          </div>

          <div className="page-hero-index">
            <small>TH</small>
            <strong>01</strong>
          </div>

        </div>

        {/* Main Content */}
        <div className="page-hero-content">

          <div className="page-hero-copy">

            <h1>
              {title}
              <em>{highlight}</em>
            </h1>

            {description && (
              <p>
                {description}
              </p>
            )}

            <Link
              to={buttonLink}
              className="page-hero-button"
            >
              <span>{buttonText}</span>

              <span className="page-hero-button-icon">
                <ArrowUpRight size={18} />
              </span>
            </Link>

          </div>

        </div>

        {/* Bottom Info */}
        <div className="page-hero-bottom">

          <div className="page-hero-line">
            <span />
          </div>

          <div className="page-hero-scroll">
            <span>SCROLL TO EXPLORE</span>

            <div className="scroll-arrow">
              ↓
            </div>
          </div>

          <div className="page-hero-location">
            THAILAND
            <span>•</span>
            13.7563° N
          </div>

        </div>

      </div>

    </section>
  );
};

export default PageHero;