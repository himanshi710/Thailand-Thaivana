
import {
  ArrowUpRight,
  Landmark,
  Sparkles,
  Palette,
  HeartHandshake,
  Music,
  Utensils,
  Flower2,
  Shirt,
  Users,
  Waves,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Culture.css";


/* =========================================================
   CULTURE DATA — 10 EXPERIENCES
========================================================= */

const culture = [
  {
    number: "01",
    tag: "SPIRITUALITY",
    title: "Temples",
    subtitle: "Where silence speaks.",
    text: "From Bangkok's grand sanctuaries to quiet mountain temples, Thailand's spiritual spaces reveal a culture shaped by devotion, beauty and centuries of tradition.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "02",
    tag: "CELEBRATION",
    title: "Festivals",
    subtitle: "A country that celebrates.",
    text: "Lanterns float into the night, streets become stages and entire communities gather together. Thailand's festivals are colour, energy and connection.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "03",
    tag: "ARTISAN CRAFT",
    title: "Craft",
    subtitle: "Made by hand. Made to last.",
    text: "Silk, ceramics, woodwork and intricate textiles carry stories from one generation to the next — keeping Thailand's creative heritage beautifully alive.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "04",
    tag: "THAI HOSPITALITY",
    title: "Hospitality",
    subtitle: "Come as a traveller. Leave as a friend.",
    text: "The warmth of Thailand lives in small gestures — a shared meal, a welcoming smile and a genuine desire to make every guest feel at home.",
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "05",
    tag: "MUSIC & PERFORMANCE",
    title: "Thai Music",
    subtitle: "Rhythms that tell stories.",
    text: "Traditional instruments, graceful performances and modern sounds come together to create a musical culture that connects Thailand's past with its present.",
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "06",
    tag: "CULINARY HERITAGE",
    title: "Thai Food",
    subtitle: "Culture you can taste.",
    text: "Every curry, noodle bowl and street-side snack carries a story. Thai cuisine balances sweet, sour, salty and spicy flavours with remarkable harmony.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "07",
    tag: "TRADITION",
    title: "Thai Wellness",
    subtitle: "Slow down. Breathe deeper.",
    text: "Thai massage, herbal traditions and mindful rituals have shaped a culture of wellbeing where relaxation is not a luxury, but part of everyday life.",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "08",
    tag: "TRADITIONAL STYLE",
    title: "Thai Textiles",
    subtitle: "Threads woven with history.",
    text: "From intricate silk patterns to naturally dyed fabrics, Thailand's textile traditions transform craftsmanship into wearable pieces of cultural identity.",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "09",
    tag: "COMMUNITY",
    title: "Local Life",
    subtitle: "The heart is in the everyday.",
    text: "Morning markets, neighbourhood cafés, family-run shops and riverside communities reveal a side of Thailand that exists far beyond the tourist trail.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1800&q=90",
  },

  {
    number: "10",
    tag: "RIVERSIDE LIFE",
    title: "Life by the Water",
    subtitle: "Where Thailand flows.",
    text: "Rivers and canals have shaped Thai communities for generations. Discover floating markets, riverside homes and the slower rhythm of life beside the water.",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1800&q=90",
  },
];


/* =========================================================
   CULTURE PAGE
========================================================= */

const Culture = () => {
  return (
    <div className="culture-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="culture-hero">

        <div className="culture-hero-bg"></div>

        <div className="culture-hero-overlay"></div>

        <div className="culture-hero-glow"></div>


        <div className="container culture-hero-inner">

          <div className="culture-hero-copy">

            <div className="culture-hero-label">

              <span></span>

              THE SOUL OF THAILAND

              <span></span>

            </div>


            <h1>
              Ancient soul.
              <br />
              <em>Modern spirit.</em>
            </h1>


            <p>
              Look beyond the beaches and discover
              the traditions, stories and people that
              give Thailand its unmistakable soul.
            </p>

          </div>


          <div className="culture-hero-badge">

            <span>THAI</span>

            <strong>
              CULTURE
            </strong>

            <small>
              ROOTS
              <br />
              STORIES
              <br />
              SOUL
            </small>

          </div>

        </div>


        <div className="culture-hero-bottom">

          <span>
            01 — CULTURE
          </span>

          <span>
            DISCOVER THE SOUL
            <i></i>
          </span>

        </div>

      </section>



      {/* =====================================================
          CULTURE STORIES
      ===================================================== */}

      <section className="culture-stories section">

        <div className="container">


          {/* SECTION HEADING */}

          <div className="culture-section-heading">

            <div>

              <p className="section-label">

                <span></span>

                ROOTS & RITUALS

              </p>


              <h2>
                Meet the
                <br />
                <em>real Thailand.</em>
              </h2>

            </div>


            <p>
              Ten windows into a culture
              shaped by generations of
              tradition, creativity and
              everyday life.
            </p>

          </div>



          {/* STORY LIST */}

          <div className="culture-story-list">

            {culture.map((item, index) => {

              const Icon = item.icon;

              return (

                <article
                  className={`culture-story ${
                    index % 2 !== 0
                      ? "reverse"
                      : ""
                  }`}
                  key={item.number}
                >


                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="culture-story-image">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />


                    <div className="culture-image-overlay"></div>


                    <span className="culture-story-number">
                      {item.number}
                    </span>


                    <span className="culture-story-tag">
                      {item.tag}
                    </span>


                    <div className="culture-image-caption">

                      <span>
                        THAILAND
                      </span>

                      <i></i>

                      <span>
                        {item.number} / 10
                      </span>

                    </div>

                  </div>



                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="culture-story-content">

                    <div className="culture-story-icon">
                      <Icon size={21} />
                    </div>


                    <span className="culture-content-number">
                      {item.number}
                    </span>


                    <span className="culture-content-tag">
                      {item.tag}
                    </span>


                    <h2>
                      {item.title}
                    </h2>


                    <h3>
                      {item.subtitle}
                    </h3>


                    <p>
                      {item.text}
                    </p>


                    <Link
                      to="/contact"
                      className="culture-story-link"
                    >

                      Discover More

                      <span>
                        <ArrowUpRight size={17} />
                      </span>

                    </Link>


                    <div className="culture-content-line"></div>

                  </div>

                </article>

              );

            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="culture-cta">

        <div className="culture-cta-bg"></div>

        <div className="culture-cta-overlay"></div>

        <div className="culture-cta-glow"></div>


        <div className="container culture-cta-inner">

          <p className="culture-cta-label">
            GO DEEPER
          </p>


          <h2>
            Don't just see
            <br />
            <em>Thailand.</em>
            <br />
            Understand it.
          </h2>


          <p className="culture-cta-text">
            Trade the tourist trail for meaningful
            encounters, local stories and experiences
            that stay with you long after you leave.
          </p>


          <Link
            to="/contact"
            className="culture-cta-button"
          >

            Plan A Cultural Journey

            <ArrowUpRight size={18} />

          </Link>

        </div>

      </section>


    </div>
  );
};


export default Culture;

