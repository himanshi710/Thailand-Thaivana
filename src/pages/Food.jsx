
import { ArrowUpRight, Flame, Sparkles, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

import "./Food.css";

const foods = [
    {
        no: "01",
        name: "Pad Thai",
        category: "STREET CLASSIC",
        description:
            "Stir-fried rice noodles tossed with tamarind, peanuts, egg and fresh vegetables — Thailand's most iconic street dish.",
        image:
            "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1600&q=90",
    },

    {
        no: "02",
        name: "Tom Yum",
        category: "SPICY • AROMATIC",
        description:
            "A fragrant bowl of lemongrass, lime, chilli and herbs with a beautifully bold and refreshing finish.",
        image:
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1600&q=90",
    },

    {
        no: "03",
        name: "Green Curry",
        category: "RICH • FRAGRANT",
        description:
            "Silky coconut curry layered with fresh herbs, green chilli and an unmistakable Thai aroma.",
        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=90",
    },

    {
        no: "04",
        name: "Mango Sticky Rice",
        category: "SWEET • ICONIC",
        description:
            "Sweet mango, coconut cream and sticky rice — a beautifully simple ending to a Thai feast.",
        image:
            "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=1600&q=90",
    },

    {
        no: "05",
        name: "Khao Soi",
        category: "NORTHERN • COMFORT",
        description:
            "A creamy northern Thai curry noodle soup finished with crispy noodles, herbs and aromatic spices.",
        image:
            "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=1600&q=90",
    },

    {
        no: "06",
        name: "Som Tam",
        category: "FRESH • SPICY",
        description:
            "Green papaya salad crushed with chilli, lime, peanuts and savoury dressing for a perfect Thai balance.",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90",
    },

    {
        no: "07",
        name: "Massaman Curry",
        category: "SLOW • FRAGRANT",
        description:
            "A rich and gently spiced curry combining coconut milk, potatoes, roasted spices and tender meat.",
        image:
            "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1600&q=90",
    },

    {
        no: "08",
        name: "Thai Seafood",
        category: "COASTAL • FRESH",
        description:
            "Fresh prawns, squid and local catch grilled or wok-tossed with herbs, chilli and bright Thai flavours.",
        image:
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=90",
    },

    {
        no: "09",
        name: "Thai Milk Tea",
        category: "SWEET • REFRESHING",
        description:
            "Strong brewed tea blended with creamy milk and served chilled — the perfect companion to a hot Thai afternoon.",
        image:
            "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=1600&q=90",
    },
    {
  no: "10",
  name: "Satay",
  category: "GRILLED • STREET",
  description:
    "Tender skewers grilled over charcoal and served with rich peanut sauce, cucumber and a fresh Thai relish.",
  image:
    "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=1600&q=90",
},

{
  no: "11",
  name: "Thai Fried Rice",
  category: "COMFORT • CLASSIC",
  description:
    "Fragrant jasmine rice wok-fried with egg, vegetables, herbs and a savoury Thai-style seasoning.",
  image:
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=90",
},
];

const Food = () => {
    return (
        <div className="food-page">

            {/* ================= HERO ================= */}

            <section className="food-hero">

                <div className="food-hero-bg"></div>
                <div className="food-hero-overlay"></div>
                <div className="food-hero-glow"></div>

                <div className="container food-hero-inner">

                    <div className="food-hero-copy">

                        <div className="food-hero-label">
                            <span></span>
                            TASTE THE THAI WAY
                            <span></span>
                        </div>

                        <h1>
                            Flavours
                            <br />
                            <em>with a story.</em>
                        </h1>

                        <p>
                            From sizzling street stalls to unforgettable
                            family recipes, discover the flavours that
                            make Thailand impossible to forget.
                        </p>

                        <div className="food-hero-actions">
                            <a href="#food-menu" className="food-hero-button">
                                Explore Flavours
                                <ArrowUpRight size={18} />
                            </a>

                            <span className="food-hero-note">
                                <Flame size={16} />
                                BOLD • FRESH • THAI
                            </span>
                        </div>

                    </div>


                    <div className="food-hero-badge">

                        <Sparkles size={20} />

                        <span>
                            THAI
                        </span>

                        <strong>
                            FOOD
                        </strong>

                        <small>
                            TASTE
                            <br />
                            CULTURE
                            <br />
                            SOUL
                        </small>

                    </div>

                </div>


                <div className="food-hero-bottom">

                    <span>03 — FOOD</span>

                    <span>
                        FOLLOW THE FLAVOUR
                        <i></i>
                    </span>

                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section className="food-intro section">

                <div className="container food-intro-inner">

                    <div className="food-intro-left">

                        <p className="section-label">
                            <span></span>
                            EAT YOUR WAY THROUGH THAILAND
                        </p>

                        <h2>
                            Follow the aroma.
                            <br />
                            <em>Find the story.</em>
                        </h2>

                    </div>

                    <div className="food-intro-right">

                        <div className="food-intro-icon">
                            <Utensils size={22} />
                        </div>

                        <p>
                            Thai cuisine is more than a meal.
                            It is colour, tradition, family, markets
                            and memories served one plate at a time.
                        </p>

                        <span>
                            04 SIGNATURE FLAVOURS
                        </span>

                    </div>

                </div>

            </section>


            {/* ================= FOOD GRID ================= */}

            <section
                className="food-grid-section"
                id="food-menu"
            >

                <div className="container">

                    <div className="food-grid-heading">

                        <div>
                            <p className="section-label">
                                <span></span>
                                SIGNATURE BITES
                            </p>

                            <h2>
                                Taste the
                                <br />
                                <em>Thailand.</em>
                            </h2>
                        </div>

                        <p>
                            Four unforgettable flavours.
                            One delicious way to discover the country.
                        </p>

                    </div>


                    <div className="container food-grid">

                        {foods.map((food, index) => (
                            <article
                                className={`food-card food-card-${index + 1}`}
                                key={food.no}
                            >
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    loading="lazy"
                                />

                                <div className="food-card-overlay"></div>

                                <div className="food-card-number">
                                    {food.no}
                                </div>

                                <div className="food-card-content">

                                    <span>{food.category}</span>

                                    <h2>{food.name}</h2>

                                    <p>{food.description}</p>

                                    <div className="food-card-link">
                                        Discover
                                        <ArrowUpRight size={18} />
                                    </div>

                                </div>
                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================= FOOD TRAIL ================= */}

            <section className="food-trail section">

                <div className="container food-trail-inner">

                    <div className="food-trail-copy">

                        <p className="section-label">
                            <span></span>
                            BUILD YOUR FOOD TRAIL
                        </p>

                        <h2>
                            What are you
                            <br />
                            <em>craving?</em>
                        </h2>

                        <p className="food-trail-description">
                            Pick your mood and let Thailand's flavours
                            lead the way.
                        </p>

                    </div>


                    <div className="food-options">

                        <button>
                            <span>🌶</span>
                            SPICY
                            <ArrowUpRight size={16} />
                        </button>

                        <button>
                            <span>🥭</span>
                            SWEET
                            <ArrowUpRight size={16} />
                        </button>

                        <button>
                            <span>🍜</span>
                            STREET
                            <ArrowUpRight size={16} />
                        </button>

                        <button>
                            <span>🦐</span>
                            SEAFOOD
                            <ArrowUpRight size={16} />
                        </button>

                        <button>
                            <span>🥬</span>
                            VEGETARIAN
                            <ArrowUpRight size={16} />
                        </button>

                        <button>
                            <span>☕</span>
                            CAFÉS
                            <ArrowUpRight size={16} />
                        </button>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="food-cta">

                <div className="food-cta-bg"></div>
                <div className="food-cta-overlay"></div>

                <div className="container food-cta-inner">

                    <p className="food-cta-label">
                        COME HUNGRY.
                    </p>

                    <h2>
                        Leave with
                        <br />
                        <em>stories.</em>
                    </h2>

                    <p className="food-cta-text">
                        Let us build a Thailand journey where
                        every destination comes with something
                        unforgettable to taste.
                    </p>

                    <Link
                        to="/contact"
                        className="food-cta-button"
                    >
                        Plan My Food Journey
                        <ArrowUpRight size={18} />
                    </Link>

                </div>

            </section>

        </div>
    );
};

export default Food;

