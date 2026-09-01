import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import "./Packages.css";

const packages = [
  {
    number: "01",
    type: "THE CLASSIC",
    title: "First Thailand",
    duration: "6 Nights / 7 Days",
    route: "Bangkok → Phuket",
    price: "From ₹59,999",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Bangkok city experience",
      "Temple & cultural tour",
      "Phuket island day",
      "Sunset experience",
    ],
  },
  {
    number: "02",
    type: "THE ISLANDER",
    title: "Island Escape",
    duration: "5 Nights / 6 Days",
    route: "Phuket → Krabi",
    price: "From ₹54,999",
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Beach resort stay",
      "Island hopping",
      "Snorkelling experience",
      "Private sunset evening",
    ],
  },
  {
    number: "03",
    type: "THE EXPLORER",
    title: "North & South",
    duration: "8 Nights / 9 Days",
    route: "Chiang Mai → Bangkok → Phuket",
    price: "From ₹89,999",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Northern Thailand",
      "Bangkok city stay",
      "Island experience",
      "Curated local experiences",
    ],
  },
];

const Packages = () => {
  return (
    <div className="packages-page">

      <section className="packages-hero">
        <div className="container">
          <p>THAIVANA JOURNEYS</p>

          <h1>
            Journeys
            <br />
            <em>designed for you.</em>
          </h1>

          <span>
            Not tours. Carefully curated stories
            waiting to become yours.
          </span>
        </div>
      </section>

      <section className="package-list section">
        <div className="container">

          {packages.map((item, index) => (
            <article className="package-item" key={item.title}>

              <div className="package-image">
                <img src={item.image} alt={item.title} />

                <span>{item.number}</span>
              </div>

              <div className="package-content">

                <small>{item.type}</small>

                <h2>{item.title}</h2>

                <div className="package-route">
                  {item.duration}
                  <span>•</span>
                  {item.route}
                </div>

                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="package-bottom">
                  <strong>{item.price}</strong>

                  <Link to="/contact">
                    View Journey
                    <ArrowUpRight size={17} />
                  </Link>
                </div>

              </div>

            </article>
          ))}

        </div>
      </section>

      <section className="package-custom">
        <div className="container">
          <p>CAN'T FIND YOUR JOURNEY?</p>

          <h2>
            Then let's
            <br />
            <em>build one.</em>
          </h2>

          <Link to="/contact" className="btn btn-primary">
            Create My Trip
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Packages;