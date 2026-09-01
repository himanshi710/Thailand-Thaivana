import {
    ArrowUpRight,
    Mail,
    Phone,
    MapPin,
    Sparkles,
    Send,
    Plane,
} from "lucide-react";

import "./Contact.css";

const travelTypes = [
    "BEACH",
    "CULTURE",
    "ADVENTURE",
    "LUXURY",
    "ROMANCE",
    "FOOD",
];

const Contact = () => {
    return (
        <div className="contact-page">

            {/* =========================================
          HERO
      ========================================= */}

            <section className="contact-hero">

                <div className="contact-hero-bg"></div>
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-glow"></div>

                <div className="container contact-hero-inner">

                    <div className="contact-hero-copy">

                        <div className="contact-hero-label">
                            <span></span>
                            PLAN YOUR THAILAND
                            <span></span>
                        </div>

                        <h1>
                            Your next
                            <br />
                            <em>story starts here.</em>
                        </h1>

                        <p>
                            Tell us what you're dreaming about.
                            We'll turn it into a Thailand journey
                            made entirely around you.
                        </p>

                    </div>

                    <div className="contact-hero-card">

                        <Sparkles size={19} />

                        <span>
                            LET'S MAKE IT
                        </span>

                        <strong>
                            PERSONAL.
                        </strong>

                        <small>
                            CUSTOM JOURNEYS
                            <br />
                            LOCAL EXPERIENCES
                            <br />
                            UNFORGETTABLE MOMENTS
                        </small>

                    </div>

                </div>

                <div className="contact-hero-bottom">

                    <span>
                        THAIVANA / CONTACT
                    </span>

                    <span>
                        START YOUR JOURNEY
                        <i></i>
                    </span>

                </div>

            </section>


            {/* =========================================
          CONTACT SECTION
      ========================================= */}

            <section className="contact-section section">

                <div className="container contact-grid">

                    {/* LEFT */}

                    <div className="contact-info">

                        <div className="contact-info-label">
                            <span></span>
                            LET'S CREATE SOMETHING BEAUTIFUL
                        </div>

                        <h2>
                            Don't just
                            <br />
                            <em>take a trip.</em>
                        </h2>

                        <p className="contact-description">
                            Tell us where you want to go, how you
                            like to travel and what you want to feel.
                            We'll take care of everything in between.
                        </p>


                        <div className="contact-details">

                            <a href="mailto:hello@thaivana.com">
                                <div className="contact-detail-icon">
                                    <Mail size={18} />
                                </div>

                                <div>
                                    <small>EMAIL US</small>
                                    <span>hello@thaivana.com</span>
                                </div>

                                <ArrowUpRight size={17} />
                            </a>


                            <a href="tel:+66000000000">
                                <div className="contact-detail-icon">
                                    <Phone size={18} />
                                </div>

                                <div>
                                    <small>CALL US</small>
                                    <span>+66 00 000 0000</span>
                                </div>

                                <ArrowUpRight size={17} />
                            </a>


                            <div className="contact-detail-static">

                                <div className="contact-detail-icon">
                                    <MapPin size={18} />
                                </div>

                                <div>
                                    <small>BASED IN</small>
                                    <span>Thailand</span>
                                </div>

                            </div>

                        </div>


                        <div className="contact-mini-card">

                            <div className="contact-mini-icon">
                                <Plane size={18} />
                            </div>

                            <div>
                                <strong>
                                    Made for curious travellers.
                                </strong>

                                <span>
                                    Thoughtful journeys. Beautiful places.
                                </span>
                            </div>

                        </div>

                    </div>


                    {/* FORM */}

                    <div className="trip-form-wrapper">

                        <div className="form-top">

                            <div>
                                <span>01</span>

                                <h3>
                                    Let's plan
                                    <br />
                                    <em>your escape.</em>
                                </h3>
                            </div>

                            <Sparkles size={20} />

                        </div>


                        <form className="trip-form">

                            <div className="form-row">

                                <label>
                                    YOUR NAME

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </label>

                                <label>
                                    EMAIL

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                    />
                                </label>

                            </div>


                            <div className="form-row">

                                <label>
                                    TRAVEL DATES

                                    <input
                                        type="text"
                                        placeholder="When are you travelling?"
                                    />
                                </label>

                                <label>
                                    TRAVELLERS

                                    <select defaultValue="">
                                        <option value="" disabled>
                                            Select travellers
                                        </option>

                                        <option>1–2 people</option>
                                        <option>3–4 people</option>
                                        <option>5–8 people</option>
                                        <option>9+ people</option>
                                    </select>

                                </label>

                            </div>


                            <div className="travel-type-field">

                                <label>
                                    WHAT KIND OF THAILAND?
                                </label>

                                <div className="travel-types">

                                    {travelTypes.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                        >
                                            {type}
                                        </button>
                                    ))}

                                </div>

                            </div>


                            <label>
                                TELL US MORE

                                <textarea
                                    rows="5"
                                    placeholder="Tell us what you're imagining..."
                                ></textarea>

                            </label>


                            <button
                                className="form-submit"
                                type="submit"
                            >
                                <span>
                                    PLAN MY JOURNEY
                                </span>

                                <div>
                                    <Send size={17} />
                                </div>
                            </button>

                        </form>

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



            {/* =========================================
          BOTTOM CTA
      ========================================= */}

            <section className="contact-bottom">

                <div className="contact-bottom-bg"></div>
                <div className="contact-bottom-overlay"></div>

                <div className="container contact-bottom-inner">

                    <p>
                        NO ORDINARY HOLIDAYS
                    </p>

                    <h2>
                        Thailand is waiting.
                        <br />
                        <em>Are you ready?</em>
                    </h2>

                    <span>
                        One conversation is all it takes
                        to start something unforgettable.
                    </span>

                </div>

            </section>

        </div>
    );
};

export default Contact;