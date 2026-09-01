
import {
    Waves,
    ArrowUpRight,
    Mountain,
    Heart,
    Utensils,
    Sparkles,
    Moon,
    ShoppingBag,
    Landmark,
    Palmtree,
    Camera,
    Ship,
    Bike,
    Sunrise,
    Leaf,
    Music,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Experiences.css";


/* =========================================================
   EXPERIENCES DATA
   ========================================================= */

const experiences = [
    {
        icon: Waves,
        number: "01",
        category: "COASTAL",
        title: "Beach Escapes",
        location: "Phuket · Krabi",
        duration: "2–4 DAYS",
        text: "Lose track of time between turquoise water, hidden beaches and slow island mornings.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Landmark,
        number: "02",
        category: "CULTURE",
        title: "Cultural Journeys",
        location: "Bangkok · Ayutthaya",
        duration: "2–3 DAYS",
        text: "Walk through ancient temples, royal history and traditions that still shape Thailand today.",
        image:
            "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Mountain,
        number: "03",
        category: "ADVENTURE",
        title: "Wild Adventures",
        location: "Northern Thailand",
        duration: "3–5 DAYS",
        text: "Trade crowded streets for jungle trails, limestone cliffs, waterfalls and wild landscapes.",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Utensils,
        number: "04",
        category: "FOOD",
        title: "Thai Flavours",
        location: "Bangkok · Chiang Mai",
        duration: "1–2 DAYS",
        text: "Discover street food, family kitchens and unforgettable flavours beyond the usual tourist menus.",
        image:
            "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Heart,
        number: "05",
        category: "ROMANCE",
        title: "Romantic Escapes",
        location: "Koh Samui · Phuket",
        duration: "3–6 DAYS",
        text: "Private villas, sunset cruises and intimate island moments designed for two.",
        image:
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Sparkles,
        number: "06",
        category: "WELLNESS",
        title: "Thai Wellness",
        location: "Chiang Mai · Phuket",
        duration: "2–5 DAYS",
        text: "Reset your rhythm with traditional Thai spa rituals, nature, meditation and quiet mornings.",
        image:
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Moon,
        number: "07",
        category: "NIGHTLIFE",
        title: "After Dark",
        location: "Bangkok · Phuket",
        duration: "EVENING",
        text: "Explore night markets, rooftop views, live music and cities that never really sleep.",
        image:
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: ShoppingBag,
        number: "08",
        category: "LOCAL LIFE",
        title: "Local Finds",
        location: "Chiang Mai · Bangkok",
        duration: "HALF DAY",
        text: "Browse colourful markets, discover handmade crafts and take home something truly Thai.",
        image:
            "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Palmtree,
        number: "09",
        category: "ISLANDS",
        title: "Island Hopping",
        location: "Phi Phi · Krabi",
        duration: "3–5 DAYS",
        text: "Sail between dramatic islands, secret lagoons and beaches framed by towering limestone cliffs.",
        image:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Camera,
        number: "10",
        category: "PHOTOGRAPHY",
        title: "Picture Perfect",
        location: "Northern Thailand",
        duration: "2–4 DAYS",
        text: "Chase golden temples, misty mountains and quiet streets made for unforgettable photographs.",
        image:
            "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Ship,
        number: "11",
        category: "SAILING",
        title: "Sunset Sailing",
        location: "Phuket · Koh Samui",
        duration: "HALF DAY",
        text: "Leave the shore behind and watch the Thai coastline glow as the sun disappears into the sea.",
        image:
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Bike,
        number: "12",
        category: "EXPLORING",
        title: "Ride & Discover",
        location: "Chiang Mai",
        duration: "1 DAY",
        text: "Cycle through peaceful villages, rice fields and hidden corners of northern Thailand.",
        image:
            "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Sunrise,
        number: "13",
        category: "SLOW TRAVEL",
        title: "Golden Mornings",
        location: "Pai · Chiang Mai",
        duration: "1–3 DAYS",
        text: "Wake up slowly to mountain mist, warm coffee, quiet roads and beautiful golden light.",
        image:
            "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85",
    },

    {
        icon: Leaf,
        number: "14",
        category: "NATURE",
        title: "Into The Wild",
        location: "Khao Sok",
        duration: "2–4 DAYS",
        text: "Sleep close to nature, explore emerald forests and drift across one of Thailand's most beautiful lakes.",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
    },


];


const Experiences = () => {
    return (
        <main className="experiences-page">


            {/* =================================================
          HERO
          ================================================= */}

            <section className="experience-page-hero">

                {/* BACKGROUND IMAGE */}
                <div className="experience-hero-bg"></div>

                {/* GRADIENT OVERLAY */}
                <div className="experience-hero-overlay"></div>

                {/* DECORATIVE ELEMENTS */}
                <div className="experience-hero-orb experience-hero-orb-one"></div>
                <div className="experience-hero-orb experience-hero-orb-two"></div>

                <div className="container experience-hero-inner">

                    {/* LEFT CONTENT */}

                    <div className="experience-hero-copy">

                        <div className="experience-hero-label">
                            <span></span>
                            THE THAI EXPERIENCE
                            <span></span>
                        </div>

                        <h1>
                            Find your
                            <br />
                            <em>Thailand.</em>
                        </h1>

                        <p className="hero-description">
                            Dive into turquoise islands, discover ancient
                            stories, taste unforgettable flavours and
                            experience the moments that make Thailand
                            impossible to forget.
                        </p>

                        <div className="experience-hero-actions">

                            <Link
                                to="/contact"
                                className="hero-explore-btn"
                            >
                                Create My Journey
                                <ArrowUpRight size={17} />
                            </Link>

                            <span className="hero-scroll">
                                SCROLL TO EXPLORE
                                <i></i>
                            </span>

                        </div>

                    </div>


                    {/* RIGHT FLOATING CARD */}

                    <div className="hero-experience-card">

                        <div className="hero-card-number">
                            15
                        </div>

                        <div className="hero-card-line"></div>

                        <div>
                            <small>
                                CURATED WAYS
                            </small>

                            <strong>
                                To experience
                                <br />
                                Thailand
                            </strong>
                        </div>

                        <div className="hero-card-bottom">

                            <span>
                                ISLANDS
                            </span>

                            <span>
                                CULTURE
                            </span>

                            <span>
                                ADVENTURE
                            </span>

                        </div>

                    </div>

                </div>

            </section>




            {/* =================================================
          INTRO
          ================================================= */}

            <section className="experience-intro-section">

                <div className="container experience-intro">

                    <div>
                        <span className="intro-number">
                            01 — 15
                        </span>

                        <h2>
                            Choose your
                            <em> feeling.</em>
                        </h2>
                    </div>

                    <p>
                        Don't follow a checklist.
                        Follow what makes you curious.
                        Whether you're looking for adventure,
                        romance, food or simply somewhere
                        beautiful to breathe — Thailand has
                        a version of itself waiting for you.
                    </p>

                </div>

            </section>


            {/* =================================================
          EXPERIENCE GRID
          ================================================= */}

            <section className="experience-grid-section">

                <div className="container">


                    <div className="experience-grid">

                        {experiences.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    className="experience-card"
                                    key={item.number}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                    />

                                    <div className="experience-card-overlay"></div>

                                    <div className="experience-card-top">

                                        <span className="experience-number">
                                            {item.number}
                                        </span>

                                        <span className="experience-category">
                                            {item.category}
                                        </span>

                                    </div>

                                    <div className="experience-card-content">

                                        <div className="experience-icon">
                                            <Icon size={20} />
                                        </div>

                                        <h2>{item.title}</h2>

                                        <p>{item.text}</p>

                                        <div className="experience-meta">

                                            <span>{item.location}</span>

                                            <span>{item.duration}</span>

                                        </div>

                                    </div>

                                </article>
                            );
                        })}

                    </div>



                </div>

            </section>


            {/* =================================================
          CTA
          ================================================= */}

            <section className="experience-cta">

                <div className="experience-cta-glow"></div>

                <div className="container">

                    <span className="cta-label">
                        YOUR MOOD. YOUR THAILAND.
                    </span>

                    <h2>
                        Don't just visit
                        <br />
                        <em>Thailand.</em>
                        <br />
                        Feel it.
                    </h2>

                    <p>
                        Tell us what kind of journey
                        you're dreaming about.
                    </p>

                    <Link
                        to="/contact"
                        className="experience-cta-button"
                    >
                        Start Planning
                        <ArrowUpRight size={18} />
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default Experiences;

