
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "../components/PageHero";
import "./Destinations.css";


/* =========================================================
   DESTINATIONS DATA
========================================================= */

const destinations = [
    {
        no: "01",
        name: "Bangkok",
        tag: "CITY • CULTURE • NIGHT",
        description:
            "Golden temples, rooftop nights and endless energy.",
        image:
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=90",
        path: "/destinations/bangkok",
        mood: "ELECTRIC",
    },

    {
        no: "02",
        name: "Phuket",
        tag: "ISLAND • BEACH • LUXURY",
        description:
            "Turquoise seas, island adventures and tropical sunsets.",
        image:
            "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=90",
        path: "/destinations/phuket",
        mood: "TROPICAL",
    },

    {
        no: "03",
        name: "Krabi",
        tag: "ADVENTURE • ISLANDS",
        description:
            "Dramatic cliffs, hidden lagoons and wild coastlines.",
        image:
            "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1600&q=90",
        path: "/destinations/krabi",
        mood: "WILD",
    },

    {
        no: "04",
        name: "Chiang Mai",
        tag: "MOUNTAINS • CULTURE",
        description:
            "Ancient temples, cool mountains and slower mornings.",
        image:
            "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1600&q=90",
        path: "/destinations/chiang-mai",
        mood: "SLOW",
    },

    {
        no: "05",
        name: "Koh Samui",
        tag: "ISLAND • ROMANCE",
        description:
            "Palm-fringed beaches and beautiful island escapes.",
        image:
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=90",
        path: "/contact",
        mood: "ROMANTIC",
    },

    {
        no: "06",
        name: "Pattaya",
        tag: "COAST • ENTERTAINMENT",
        description:
            "Coastal energy, experiences and unforgettable nights.",
        image:
            "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1600&q=90",
        path: "/contact",
        mood: "VIBRANT",
    },

    {
        no: "07",
        name: "Ayutthaya",
        tag: "HISTORY • TEMPLES • HERITAGE",
        description:
            "Ancient ruins, royal stories and timeless temple landscapes.",
        image:
            "https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?auto=format&fit=crop&w=1600&q=90",
        path: "/contact",
        mood: "TIMELESS",
    },

    {
        no: "08",
        name: "Pai",
        tag: "MOUNTAINS • NATURE • SLOW LIFE",
        description:
            "Misty valleys, winding roads and peaceful days in the hills.",
        image:
            "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1600&q=90",
        path: "/contact",
        mood: "BOHEMIAN",
    },

    {
        no: "09",
        name: "Koh Phi Phi",
        tag: "ISLAND • LAGOON • ADVENTURE",
        description:
            "Crystal waters, limestone cliffs and picture-perfect island days.",
        image:
            "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&w=1600&q=90",
        path: "/contact",
        mood: "PARADISE",
    },

    {
        no: "10",
        name: "Hua Hin",
        tag: "COAST • ESCAPE • LEISURE",
        description:
            "Elegant seaside escapes, local markets and relaxed coastal charm.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90",
        path: "/contact",
        mood: "RELAXED",
    },

    {
        no: "11",
        name: "Kanchanaburi",
        tag: "NATURE • RIVERS • ADVENTURE",
        description:
            "Waterfalls, lush forests and quiet riverside landscapes.",
        image:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=90",
        path: "/contact",
        mood: "UNTAMED",
    },

    {
        no: "12",
        name: "Koh Tao",
        tag: "DIVING • ISLAND • OCEAN",
        description:
            "Clear blue water, colourful reefs and unforgettable underwater adventures.",
        image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=90",
        path: "/contact",
        mood: "OCEANIC",
    },
];

/* =========================================================
   DESTINATIONS
========================================================= */

const Destinations = () => {
    return (
        <div className="destinations-page">


            {/* =====================================================
          HERO
      ===================================================== */}

            <PageHero
                number="02"
                eyebrow="EXPLORE THAILAND"
                title="Discover"
                italic="More."
                description="From energetic cities to remote islands, find the Thailand that feels like yours."
                image="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2200&q=90"
            />


            {/* =====================================================
          INTRO
      ===================================================== */}

            <section className="destinations-intro section">

                <div className="destinations-intro-orb destinations-intro-orb-one"></div>
                <div className="destinations-intro-orb destinations-intro-orb-two"></div>

                <div className="container destinations-intro-inner">

                    {/* ================= LEFT ================= */}

                    <div className="destinations-intro-left">

                        <p className="section-label">
                            <span></span>
                            THE THAILAND EDIT
                        </p>

                        <h2>
                            One country.
                            <br />
                            <em>Endless directions.</em>
                        </h2>

                        <div className="intro-mini-line">
                            <span></span>
                            <small>CURATED FOR THE CURIOUS</small>
                        </div>

                    </div>


                    {/* ================= RIGHT ================= */}

                    <div className="destinations-intro-right">

                        <div className="intro-card-top">

                            <div className="intro-icon">
                                <Compass size={22} />
                            </div>

                            <span className="intro-index">
                                12 / 12
                            </span>

                        </div>


                        <p>
                            Choose a mood, follow a feeling and
                            discover a side of Thailand that feels
                            completely your own.
                        </p>


                        <div className="intro-card-bottom">

                            <span className="intro-card-line"></span>

                            <span>
                                12 DESTINATIONS
                            </span>

                        </div>

                    </div>

                </div>

            </section>



            {/* =====================================================
          BETWEEN SECTION
      ===================================================== */}


            <section className="destination-discover">

                <div className="destination-discover-orb destination-discover-orb-one"></div>
                <div className="destination-discover-orb destination-discover-orb-two"></div>

                <div className="destination-discover-ring"></div>

                <div className="container destination-discover-inner">

                    <div className="discover-icon">
                        <Sparkles size={21} />
                    </div>

                    <p className="discover-label">
                        NOT SURE WHERE TO BEGIN?
                    </p>

                    <h2>
                        Your perfect
                        <br />
                        <em>Thailand awaits.</em>
                    </h2>

                    <span className="discover-description">
                        Tell us what kind of traveller you are.
                        <br className="desktop-break" />
                        We'll point you in the right direction.
                    </span>

                    <Link
                        to="/contact"
                        className="destination-discover-button"
                    >
                        <span>Find My Destination</span>

                        <i>
                            <ArrowUpRight size={18} />
                        </i>
                    </Link>

                </div>

            </section>

            {/* =====================================================
          DESTINATION LIST
      ===================================================== */}

            <section className="destination-list">

                <div className="container">

                    <div className="destination-list-heading">

                        <span>
                            WHERE WILL YOU GO?
                        </span>

                        <div></div>

                        <span>
                            2026 / THAILAND
                        </span>

                    </div>


                    <div className="destination-grid">

                        {destinations.map((item, index) => (

                            <Link
                                to={item.path}
                                className={`destination-card ${index % 3 === 1
                                    ? "destination-card-small"
                                    : "destination-card-large"
                                    }`}
                                key={item.name}
                            >


                                {/* IMAGE */}

                                <div className="destination-card-image">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                    />

                                    <div className="destination-card-overlay"></div>


                                    {/* TOP */}

                                    <div className="destination-card-top">

                                        <span className="destination-number">
                                            {item.no}
                                        </span>

                                        <span className="destination-mood">
                                            {item.mood}
                                        </span>

                                    </div>


                                    {/* BOTTOM */}

                                    <div className="destination-card-bottom">

                                        <span className="destination-tag">
                                            {item.tag}
                                        </span>

                                        <h3>
                                            {item.name}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>


                                        <div className="destination-card-action">

                                            <span>
                                                Explore destination
                                            </span>

                                            <i>
                                                <ArrowUpRight size={18} />
                                            </i>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>







            {/* =====================================================
          BOTTOM CTA
      ===================================================== */}


            <section className="destination-bottom section">

                <div className="destination-bottom-glow destination-bottom-glow-one"></div>
                <div className="destination-bottom-glow destination-bottom-glow-two"></div>

                <div className="container destination-bottom-inner">

                    <div className="destination-bottom-heading">

                        <span className="destination-bottom-number">
                            06
                        </span>

                        <p className="section-label">
                            <span></span>
                            MAKE IT PERSONAL
                        </p>

                        <h2>
                            Don't just choose
                            <br />
                            <em>a destination.</em>
                        </h2>

                    </div>


                    <div className="destination-bottom-content">

                        <div className="destination-bottom-line"></div>

                        <p>
                            Build a journey around your pace,
                            passions and the places you've always
                            wanted to experience.
                        </p>

                        <Link
                            to="/contact"
                            className="destination-bottom-button"
                        >
                            <span>
                                Plan My Journey
                            </span>

                            <i>
                                <ArrowUpRight size={19} />
                            </i>
                        </Link>

                    </div>

                </div>

            </section>



        </div>
    );
};


export default Destinations;

