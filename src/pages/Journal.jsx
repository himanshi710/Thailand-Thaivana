
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import "./Journal.css";

const articles = [
  {
    category: "CITY GUIDE",
    date: "AUG 18, 2026",
    title: "7 Days in Bangkok",
    text: "A slower, smarter way to experience Thailand's electric capital — from hidden cafés to golden temples.",
    location: "Bangkok",
    time: "8 MIN READ",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "ISLANDS",
    date: "AUG 12, 2026",
    title: "Phuket or Krabi?",
    text: "Two coastlines. Two personalities. Discover which one fits the way you love to travel.",
    location: "Andaman Coast",
    time: "6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "FOOD",
    date: "AUG 04, 2026",
    title: "Eat Thailand",
    text: "From smoky street grills to legendary night markets, taste the flavours that define Thailand.",
    location: "Across Thailand",
    time: "7 MIN READ",
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "HIDDEN THAILAND",
    date: "JUL 28, 2026",
    title: "Beyond The Postcard",
    text: "Quiet beaches, forgotten villages and beautiful places for travellers who prefer the road less taken.",
    location: "Northern Thailand",
    time: "9 MIN READ",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "CULTURE",
    date: "JUL 21, 2026",
    title: "The Soul of Chiang Mai",
    text: "Temple bells, mountain air and slow mornings — discover the softer side of Thailand.",
    location: "Chiang Mai",
    time: "5 MIN READ",
    image:
      "https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "ADVENTURE",
    date: "JUL 14, 2026",
    title: "Into The Wild",
    text: "Jungle trails, limestone cliffs and unforgettable encounters beyond the usual itinerary.",
    location: "Southern Thailand",
    time: "10 MIN READ",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "WELLNESS",
    date: "JUL 08, 2026",
    title: "Slow Days in Koh Samui",
    text: "Trade busy schedules for ocean mornings, island spas and the simple luxury of doing absolutely nothing.",
    location: "Koh Samui",
    time: "6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "TEMPLES",
    date: "JUN 30, 2026",
    title: "Thailand's Golden Temples",
    text: "A journey through breathtaking temples, ancient stories and the spiritual heart of Thailand.",
    location: "Ayutthaya",
    time: "8 MIN READ",
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "ISLAND LIFE",
    date: "JUN 22, 2026",
    title: "A Day in Koh Phi Phi",
    text: "Crystal water, hidden coves and sunset skies — a perfect island day away from the ordinary.",
    location: "Koh Phi Phi",
    time: "5 MIN READ",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1600&q=90",
  },

  {
    category: "LOCAL LIFE",
    date: "JUN 15, 2026",
    title: "Morning Markets of Thailand",
    text: "Wake up early and follow the aromas, colours and conversations that bring Thailand's local markets to life.",
    location: "Floating Markets",
    time: "7 MIN READ",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1600&q=90",
  },
];

const Journal = () => {
  return (
    <div className="journal-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="journal-hero">

        <div className="journal-hero-bg"></div>
        <div className="journal-hero-overlay"></div>

        <div className="journal-hero-glow"></div>

        <div className="container journal-hero-inner">

          <div className="journal-hero-copy">

            <div className="journal-hero-label">
              <span></span>
              THAIVANA JOURNAL
              <span></span>
            </div>

            <h1>
              Stories
              <br />
              <em>worth travelling for.</em>
            </h1>

            <p>
              Places to discover. Flavours to remember.
              Stories that make you want to pack your bag
              and take the next flight to Thailand.
            </p>

          </div>

          <div className="journal-hero-stamp">

            <span>EST.</span>

            <strong>2026</strong>

            <small>
              THAILAND
              <br />
              JOURNAL
            </small>

          </div>

        </div>

        <div className="journal-scroll">
          SCROLL TO EXPLORE
          <span></span>
        </div>

      </section>


      {/* =====================================================
          FEATURED STORY
      ===================================================== */}

      <section className="journal-feature section">

        <div className="container">

          <div className="journal-feature-heading">

            <div>
              <p className="section-label">
                <span></span>
                EDITOR'S PICK
              </p>
            </div>

            <span className="feature-index">
              01 / FEATURED
            </span>

          </div>


          <div className="journal-feature-grid">

            <div className="journal-feature-image">

              <img
                src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1900&q=90"
                alt="Bangkok Thailand"
              />

              <div className="feature-image-gradient"></div>

              <span className="feature-image-location">
                <MapPin size={13} />
                BANGKOK, THAILAND
              </span>

            </div>


            <div className="journal-feature-content">

              <span className="feature-kicker">
                FEATURED STORY / 01
              </span>

              <h2>
                The art of
                <br />
                <em>getting lost.</em>
              </h2>

              <p>
                Sometimes the best Thailand moments
                aren't on the itinerary. They're found
                around the corner — in a tiny café,
                a quiet temple or a street you've never
                seen before.
              </p>

              <div className="feature-meta">

                <span>
                  <Clock3 size={14} />
                  8 MIN READ
                </span>

                <span>
                  AUG 18, 2026
                </span>

              </div>

              <Link
                to="/contact"
                className="feature-read"
              >
                Read The Story
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LATEST STORIES
      ===================================================== */}

      <section className="journal-list section">

        <div className="container">

          <div className="journal-heading">

            <div>
              <p className="section-label">
                <span></span>
                FROM THE JOURNAL
              </p>

              <h2>
                Go <em>curious.</em>
              </h2>
            </div>

            <p className="journal-heading-text">
              A collection of guides, ideas and
              stories for seeing Thailand differently.
            </p>

          </div>


          <div className="article-grid">

            {articles.map((article, index) => (

              <article
                className={`article-card article-card-${index + 1}`}
                key={article.title}
              >

                <div className="article-image">

                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                  />

                  <div className="article-image-overlay"></div>

                  <span className="article-number">
                    0{index + 1}
                  </span>

                  <span className="article-category">
                    {article.category}
                  </span>

                </div>


                <div className="article-body">

                  <div className="article-meta">

                    <span>
                      {article.date}
                    </span>

                    <span>
                      {article.time}
                    </span>

                  </div>

                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="article-footer">

                    <span className="article-location">
                      <MapPin size={13} />
                      {article.location}
                    </span>

                    <Link to="/contact">
                      <span>Read</span>
                      <ArrowUpRight size={16} />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNAL CTA
      ===================================================== */}

      <section className="journal-cta">

        <div className="journal-cta-bg"></div>
        <div className="journal-cta-overlay"></div>

        <div className="container">

          <p className="journal-cta-label">
            KEEP EXPLORING
          </p>

          <h2>
            Your next story
            <br />
            <em>could start here.</em>
          </h2>

          <Link
            to="/contact"
            className="journal-cta-button"
          >
            Plan Your Thailand
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Journal;

