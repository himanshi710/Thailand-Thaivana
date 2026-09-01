import {
    ArrowLeft,
    ArrowUpRight,
    MapPin,
    Sparkles,
    Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./DestinationDetail.css";

const DestinationDetail = ({
    name,
    subtitle,
    location = "Thailand",
    description,
    image,
    highlights = [],
    itinerary = [],
}) => {
    return (
        <main className="destination-detail">

            {/* ================= HERO ================= */}

            <section className="destination-detail-hero">

                <div
                    className="destination-detail-image"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />

                <div className="destination-detail-overlay" />

                <div className="container destination-detail-container">

                    <Link
                        to="/destinations"
                        className="destination-back"
                    >
                        <ArrowLeft size={17} />
                        <span>Back to destinations</span>
                    </Link>

                    <div className="destination-detail-content">

                        <div className="destination-detail-label">
                            <span />
                            {location}
                        </div>

                        <h1>
                            {name}
                            <em>{subtitle}</em>
                        </h1>

                        <p>{description}</p>

                    </div>

                    <div className="destination-detail-bottom">

                        <div className="destination-detail-location">
                            <MapPin size={16} />
                            <span>{location}, Thailand</span>
                        </div>

                        <div className="destination-detail-scroll">
                            SCROLL TO DISCOVER
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= INTRO ================= */}

            <section className="destination-detail-intro section">

                <div className="container destination-intro-grid">

                    <div className="destination-intro-title">

                        <div className="section-label">
                            <span />
                            DISCOVER {name.toUpperCase()}
                        </div>

                        <h2>
                            A place made
                            <br />
                            for <em>memories.</em>
                        </h2>

                    </div>

                    <div className="destination-intro-description">

                        <p>{description}</p>

                        <div className="intro-location">
                            <MapPin size={18} />
                            <span>{location}, Thailand</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= HIGHLIGHTS ================= */}

            {highlights.length > 0 && (

                <section className="destination-highlights section">

                    <div className="container">

                        <div className="section-label">
                            <span />
                            THE HIGHLIGHTS
                        </div>

                        <div className="highlights-heading">

                            <h2>
                                See it.
                                <br />
                                <em>Feel it.</em>
                            </h2>

                            <p>
                                Discover the places, moments and experiences
                                that make {name} unforgettable.
                            </p>

                        </div>


                        <div className="highlight-grid">

                            {highlights.map((item, index) => (

                                <article
                                    className="highlight-card"
                                    key={item.title || index}
                                >

                                    {/* IMAGE */}

                                    {item.image && (
                                        <div className="highlight-image">

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                            />

                                            <div className="highlight-image-overlay" />

                                            <span className="highlight-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                        </div>
                                    )}


                                    {/* CONTENT */}

                                    <div className="highlight-content">

                                        <div className="highlight-top">

                                            <span>
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <Sparkles size={18} />

                                        </div>

                                        <h3>{item.title}</h3>

                                        <p>{item.text}</p>

                                        <div className="highlight-bottom">

                                            <span>
                                                EXPLORE {name.toUpperCase()}
                                            </span>

                                            <ArrowUpRight
                                                className="highlight-arrow"
                                                size={20}
                                            />

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>

            )}


            {/* ================= ITINERARY ================= */}

            {itinerary.length > 0 && (


                <section className="destination-itinerary section">

                    <div className="container">

                        {/* HEADER */}
                        <div className="itinerary-header">

                            <div className="itinerary-header-top">

                                <p className="section-label">
                                    <span></span>
                                    SUGGESTED JOURNEY
                                </p>

                                <span className="itinerary-count">
                                    {itinerary.length < 10 ? `0${itinerary.length}` : itinerary.length} DAYS
                                </span>

                            </div>

                            <div className="itinerary-heading">
                                <div className="section-label">
                                    <span />
                                    SUGGESTED JOURNEY
                                </div>

                                <h2>
                                    Three days.
                                    <br />
                                    <em>One unforgettable island.</em>
                                </h2>

                                <p>
                                    A thoughtfully paced introduction to {name},
                                    combining beaches, local life and unforgettable
                                    island experiences.
                                </p>
                            </div>

                        </div>


                        {/* TIMELINE */}
                        <div className="itinerary-list">

                            {itinerary.map((item, index) => (

                                <article
                                    className={`itinerary-item ${index % 2 !== 0 ? "itinerary-item-alt" : ""
                                        }`}
                                    key={item.day || index}
                                >

                                    {/* NUMBER */}
                                    <div className="itinerary-number">

                                        <span>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                    </div>


                                    {/* DAY */}
                                    <div className="itinerary-day">

                                        <span>
                                            {item.day || `DAY ${index + 1}`}
                                        </span>

                                        <i></i>

                                    </div>


                                    {/* ICON */}
                                    <div className="itinerary-icon">

                                        <Clock3 size={19} />

                                    </div>


                                    {/* CONTENT */}
                                    <div className="itinerary-content">

                                        <span className="itinerary-kicker">
                                            {index === 0
                                                ? "ARRIVE & DISCOVER"
                                                : index === itinerary.length - 1
                                                    ? "SLOW DOWN & REMEMBER"
                                                    : "EXPLORE & EXPERIENCE"}
                                        </span>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.text}
                                        </p>

                                    </div>


                                    {/* ACTION */}
                                    <div className="itinerary-arrow">

                                        <ArrowUpRight size={21} />

                                    </div>

                                </article>

                            ))}

                        </div>


                        {/* FOOTER NOTE */}
                        <div className="itinerary-footer">

                            <span>
                                {name.toUpperCase()} / THAILAND
                            </span>

                            <p>
                                Your journey can always be made slower,
                                longer or completely your own.
                            </p>

                        </div>

                    </div>

                </section>



            )}


            {/* ================= CTA ================= */}

            <section className="destination-detail-cta">

                <div className="destination-detail-cta-glow" />

                <div className="container destination-cta-container">

                    <div>

                        <span>
                            YOUR THAILAND STORY
                        </span>

                        <h2>
                            Ready to discover
                            <br />
                            <em>{name}?</em>
                        </h2>

                    </div>

                    <Link
                        to="/contact"
                        className="destination-cta-button"
                    >
                        Plan My Trip
                        <ArrowUpRight size={18} />
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default DestinationDetail;