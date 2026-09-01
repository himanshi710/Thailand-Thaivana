
import {
    ArrowUpRight,
    Compass,
    Waves,
    Utensils,
    Heart,
    Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Home.css";

const destinations = [
    {
        no: "01",
        name: "Bangkok",
        type: "CITY • CULTURE • NIGHT",
        mood: "ELECTRIC",
        description:
            "Golden temples, creative streets, rooftop nights and endless city energy.",
        image:
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1800&q=90",
    },
    {
        no: "02",
        name: "Phuket",
        type: "ISLAND • BEACH • LUXURY",
        mood: "TROPICAL",
        description:
            "Turquoise water, private beaches and slow afternoons beneath the palms.",
        image:
            "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1800&q=90",
    },
    {
        no: "03",
        name: "Krabi",
        type: "ADVENTURE • SEA",
        mood: "WILD",
        description:
            "Limestone cliffs, hidden lagoons and wild coastlines made for exploring.",
        image:
            "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1800&q=90",
    },
];

const experiences = [
    {
        icon: Waves,
        number: "01",
        title: "The Islander",
        text: "Turquoise waters, hidden beaches and unforgettable boat days.",
    },
    {
        icon: Compass,
        number: "02",
        title: "The Explorer",
        text: "Temples, mountains, heritage streets and stories waiting to be found.",
    },
    {
        icon: Utensils,
        number: "03",
        title: "The Foodie",
        text: "Night markets, smoky grills and authentic Thai flavours.",
    },
    {
        icon: Heart,
        number: "04",
        title: "The Romantic",
        text: "Sunset cruises, private islands and beautiful slow moments.",
    },
];

const Home = () => {
    return (
        <main className="home">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="home-hero">

                <div className="home-hero-bg"></div>
                <div className="home-hero-overlay"></div>

                <div className="home-hero-glow"></div>

                <div className="container home-hero-content">

                    <div className="home-hero-top">

                        <div className="home-hero-label">
                            <span></span>
                            THAILAND / 13°44′N 100°30′E
                        </div>

                        <div className="home-hero-edition">
                            <Sparkles size={15} />
                            THE 2026 EDITION
                        </div>

                    </div>


                    <div className="home-hero-main">

                        <div className="home-hero-copy">

                            <p className="hero-kicker">
                                YOUR NEXT ESCAPE STARTS HERE
                            </p>

                            <h1>
                                Find your
                                <br />
                                <em>Thailand.</em>
                            </h1>

                            <p className="hero-description">
                                Island mornings. Golden temples.
                                Street-food nights. Hidden places
                                and stories worth travelling for.
                            </p>

                            <div className="home-buttons">

                                <Link
                                    to="/destinations"
                                    className="btn btn-primary"
                                >
                                    Explore Thailand
                                    <ArrowUpRight size={17} />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="hero-text-link"
                                >
                                    Plan a private journey
                                    <ArrowUpRight size={16} />
                                </Link>

                            </div>

                        </div>


                        <div className="home-hero-card">

                            <span className="hero-card-number">
                                01
                            </span>

                            <div className="hero-card-line"></div>

                            <span>
                                ONE COUNTRY
                                <br />
                                ENDLESS STORIES
                            </span>

                        </div>

                    </div>


                    <div className="home-hero-bottom">

                        <span>
                            THAILAND • BEYOND THE ORDINARY
                        </span>

                        <div className="hero-scroll">
                            <span></span>
                            SCROLL TO DISCOVER
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          INTRO
      ===================================================== */}

            <section className="home-intro section">

                <div className="container intro-grid">

                    <div className="intro-label-wrap">

                        <p className="section-label">
                            <span></span>
                            BEYOND THE POSTCARD
                        </p>

                        <span className="intro-index">
                            01 / THAILAND
                        </span>

                    </div>


                    <div className="intro-copy">

                        <h2>
                            Thailand isn't
                            <br />
                            <em>just a destination.</em>
                        </h2>

                        <p>
                            It is the sound of long-tail boats,
                            temple roofs glowing at sunset,
                            street food at midnight and
                            unexpected moments that stay
                            with you long after the journey ends.
                        </p>

                        <Link
                            to="/culture"
                            className="text-link"
                        >
                            Discover the soul of Thailand
                            <ArrowUpRight size={18} />
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
          DESTINATIONS
      ===================================================== */}

            <section className="home-destinations section">

                <div className="container">

                    <div className="section-heading-row">

                        <div>

                            <p className="section-label">
                                <span></span>
                                WHERE WILL YOU GO?
                            </p>

                            <h2>
                                Places worth
                                <br />
                                <em>getting lost in.</em>
                            </h2>

                        </div>

                        <div className="heading-side">

                            <p>
                                Three starting points.
                                Countless ways to experience them.
                            </p>

                            <Link
                                to="/destinations"
                                className="round-link"
                                aria-label="Explore destinations"
                            >
                                <ArrowUpRight size={22} />
                            </Link>

                        </div>

                    </div>


                    <div className="destination-mosaic">

                        {destinations.map((item, index) => (

                            <Link
                                to={`/destinations/${item.name
                                    .toLowerCase()
                                    .replaceAll(" ", "-")}`}
                                className={`destination-tile tile-${index + 1}`}
                                key={item.name}
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                />

                                <div className="tile-overlay"></div>


                                <div className="tile-top">

                                    <span className="tile-number">
                                        {item.no}
                                    </span>

                                    <span className="tile-mood">
                                        {item.mood}
                                    </span>

                                </div>


                                <div className="tile-content">

                                    <small>
                                        {item.type}
                                    </small>

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                    <div className="tile-explore">
                                        Explore
                                        <ArrowUpRight size={18} />
                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          MOODS
      ===================================================== */}

            <section className="home-moods section">

                <div className="container">

                    <div className="mood-heading">

                        <div>

                            <p className="section-label">
                                <span></span>
                                CHOOSE YOUR MOOD
                            </p>

                            <h2>
                                What kind of
                                <br />
                                <em>Thailand</em> are you?
                            </h2>

                        </div>

                        <p>
                            Don't travel by checklist.
                            Travel by feeling.
                        </p>

                    </div>


                    <div className="mood-grid">

                        {experiences.map((item) => {

                            const Icon = item.icon;

                            return (
                                <article
                                    className="mood-card"
                                    key={item.title}
                                >

                                    <div className="mood-card-top">

                                        <span>
                                            {item.number}
                                        </span>

                                        <div className="mood-icon">
                                            <Icon size={21} />
                                        </div>

                                    </div>


                                    <div className="mood-card-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.text}
                                        </p>

                                    </div>


                                    <Link
                                        to="/experiences"
                                        className="mood-arrow"
                                        aria-label={`Explore ${item.title}`}
                                    >
                                        <ArrowUpRight size={20} />
                                    </Link>

                                </article>
                            );

                        })}

                    </div>

                </div>

            </section>


          

              {/* =====================================================
    THAILAND MAP
===================================================== */}

            <section className="contact-map-section">

                <div className="contact-map-glow"></div>

                <div className="container">

                    <div className="contact-map-heading">

                        <div>
                            <p className="section-label">
                                <span></span>
                                FIND YOUR WAY TO THAILAND
                            </p>

                            <h2>
                                One country.
                                <br />
                                <em>Many stories.</em>
                            </h2>
                        </div>

                        <p className="contact-map-intro">
                            From Bangkok's electric streets to the quiet islands
                            of the Andaman Sea, every corner has a different
                            story waiting to be discovered.
                        </p>

                    </div>


                    <div className="contact-map">

                        {/* Decorative grid */}

                        <div className="map-grid"></div>

                        {/* Map image */}

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Thailand_location_map.svg/1200px-Thailand_location_map.svg.png"
                            alt="Map of Thailand"
                            className="thailand-map"
                        />


                        {/* Bangkok */}

                        <div className="map-pin pin-bangkok">

                            <span className="pin-dot"></span>

                            <div className="pin-info">
                                <small>01</small>
                                <strong>Bangkok</strong>
                                <span>City • Culture • Night</span>
                            </div>

                        </div>


                        {/* Chiang Mai */}

                        <div className="map-pin pin-chiangmai">

                            <span className="pin-dot"></span>

                            <div className="pin-info">
                                <small>02</small>
                                <strong>Chiang Mai</strong>
                                <span>Mountains • Culture</span>
                            </div>

                        </div>


                        {/* Phuket */}

                        <div className="map-pin pin-phuket">

                            <span className="pin-dot"></span>

                            <div className="pin-info">
                                <small>03</small>
                                <strong>Phuket</strong>
                                <span>Island • Beach</span>
                            </div>

                        </div>


                        {/* Krabi */}

                        <div className="map-pin pin-krabi">

                            <span className="pin-dot"></span>

                            <div className="pin-info">
                                <small>04</small>
                                <strong>Krabi</strong>
                                <span>Adventure • Islands</span>
                            </div>

                        </div>


                        {/* Samui */}

                        <div className="map-pin pin-samui">

                            <span className="pin-dot"></span>

                            <div className="pin-info">
                                <small>05</small>
                                <strong>Koh Samui</strong>
                                <span>Island • Romance</span>
                            </div>

                        </div>


                        {/* Bottom label */}

                        <div className="map-coordinates">
                            <span>THAILAND</span>
                            <span>13.7563° N / 100.5018° E</span>
                        </div>

                    </div>


                    <div className="map-bottom">

                        <span>
                            <i></i>
                            DESTINATION NETWORK
                        </span>

                        <p>
                            Wherever you begin,
                            <em>Thailand is closer than you think.</em>
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CULTURE
      ===================================================== */}

            <section className="home-culture section">

                <div className="container culture-grid">

                    <div className="culture-image">

                        <img
                            src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1500&q=90"
                            alt="Thai temple"
                            loading="lazy"
                        />

                        <div className="culture-image-overlay"></div>

                        <span>
                            THE SOUL OF THAILAND
                        </span>

                        <strong>
                            02
                        </strong>

                    </div>


                    <div className="culture-copy">

                        <p className="section-label">
                            <span></span>
                            CULTURE
                        </p>

                        <h2>
                            Ancient soul.
                            <br />
                            <em>Modern spirit.</em>
                        </h2>

                        <p>
                            Discover a culture shaped by centuries
                            of traditions, craftsmanship, spirituality,
                            food and extraordinary hospitality.
                        </p>


                        <div className="culture-points">

                            <span>01 / TEMPLES</span>
                            <span>02 / FESTIVALS</span>
                            <span>03 / CRAFT</span>
                            <span>04 / HOSPITALITY</span>

                        </div>


                        <Link
                            to="/culture"
                            className="text-link"
                        >
                            Explore Thai culture
                            <ArrowUpRight size={18} />
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section className="home-final">

                <div className="home-final-bg"></div>
                <div className="home-final-overlay"></div>
                <div className="home-final-glow"></div>


                <div className="container home-final-content">

                    <p className="final-kicker">
                        YOUR THAILAND STORY
                    </p>

                    <span className="final-number">
                        2026
                    </span>

                    <h2>
                        Don't just
                        <br />
                        <em>visit.</em>
                        <br />
                        Feel it.
                    </h2>

                    <p className="final-description">
                        Build a journey around the places,
                        flavours and experiences that feel
                        uniquely yours.
                    </p>

                    <Link
                        to="/contact"
                        className="btn btn-primary"
                    >
                        Build My Trip
                        <ArrowUpRight size={18} />
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default Home;

