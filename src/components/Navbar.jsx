
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* ===============================
     CLOSE EVERYTHING
     =============================== */

  const closeMenu = () => {
    setOpen(false);
    setMoreOpen(false);
  };


  /* ===============================
     CLOSE DROPDOWN OUTSIDE
     =============================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);


  /* ===============================
     NAV ACTIVE CLASS
     =============================== */

  const navClass = ({ isActive }) =>
    isActive
      ? "nav-link active"
      : "nav-link";


  return (
    <header
      className={`navbar ${
        open ? "menu-open" : ""
      }`}
    >

      <div className="navbar-inner container">

        {/* =================================================
            LOGO
            ================================================= */}

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-main">
            THAIVANA
          </span>

          <span className="brand-sub">
            THAILAND • BEYOND THE ORDINARY
          </span>
        </Link>


        {/* =================================================
            DESKTOP NAV
            ================================================= */}

        <nav className="desktop-nav">

          {/* HOME */}

          <NavLink
            to="/"
            end
            className={navClass}
          >
            Home
          </NavLink>


          {/* EXPERIENCES */}

          <NavLink
            to="/experiences"
            className={navClass}
          >
            Experiences
          </NavLink>


          {/* JOURNEYS */}

          <NavLink
            to="/packages"
            className={navClass}
          >
            Journeys
          </NavLink>


          {/* CULTURE */}

          <NavLink
            to="/culture"
            className={navClass}
          >
            Culture
          </NavLink>


          {/* JOURNAL */}

          <NavLink
            to="/journal"
            className={navClass}
          >
            Journal
          </NavLink>


          {/* =================================================
              MORE DROPDOWN
              ================================================= */}

          <div
            className="nav-dropdown"
            ref={dropdownRef}
          >

            <button
              type="button"
              className={`nav-link dropdown-trigger ${
                moreOpen ? "dropdown-active" : ""
              }`}
              onClick={() =>
                setMoreOpen((prev) => !prev)
              }
            >
              More

              <ChevronDown
                size={15}
                className={
                  moreOpen
                    ? "rotate-icon"
                    : ""
                }
              />
            </button>


            {moreOpen && (
              <div className="dropdown-menu">

                {/* DROPDOWN HEADER */}

                <div className="dropdown-heading">
                  <span>EXPLORE THAILAND</span>
                  <small>
                    Discover more
                  </small>
                </div>


                {/* DESTINATIONS */}

                <Link
                  to="/destinations"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Destinations
                    </strong>

                    <small>
                      Places worth discovering
                    </small>
                  </span>

                  <ArrowUpRight size={16} />
                </Link>


                {/* BANGKOK */}

                <Link
                  to="/destinations/bangkok"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Bangkok
                    </strong>

                    <small>
                      The city of energy
                    </small>
                  </span>

                  <ArrowUpRight size={16} />
                </Link>


                {/* PHUKET */}

                <Link
                  to="/destinations/phuket"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Phuket
                    </strong>

                    <small>
                      Island escape
                    </small>
                  </span>

                  <ArrowUpRight size={16} />
                </Link>


                {/* KRABI */}

                <Link
                  to="/destinations/krabi"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Krabi
                    </strong>

                    <small>
                      Cliffs & turquoise seas
                    </small>
                  </span>

                  <ArrowUpRight size={16} />
                </Link>


                {/* CHIANG MAI */}

                <Link
                  to="/destinations/chiang-mai"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Chiang Mai
                    </strong>

                    <small>
                      Mountains & culture
                    </small>
                  </span>

                  <ArrowUpRight size={16} />
                </Link>


                {/* THAI FOOD */}

                <Link
                  to="/food"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Thai Food
                    </strong>

                    <small>
                      Taste Thailand
                    </small>
                  </span>

                  <ArrowUpRight size={16} />
                </Link>

              </div>
            )}

          </div>

        </nav>


        {/* =================================================
            DESKTOP CTA
            ================================================= */}

        <Link
          to="/contact"
          className="navbar-cta"
          onClick={closeMenu}
        >
          Plan My Trip

          <ArrowUpRight size={17} />
        </Link>


        {/* =================================================
            MOBILE MENU BUTTON
            ================================================= */}

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => {
            setOpen((prev) => !prev);
            setMoreOpen(false);
          }}
          aria-label={
            open
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={open}
        >
          {open ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>


      {/* =================================================
          MOBILE NAV
          ================================================= */}

      <div
        className={`mobile-nav ${
          open ? "show" : ""
        }`}
      >

        {/* HOME */}

        <NavLink
          to="/"
          end
          onClick={closeMenu}
        >
          Home
        </NavLink>


        {/* EXPERIENCES */}

        <NavLink
          to="/experiences"
          onClick={closeMenu}
        >
          Experiences
        </NavLink>


        {/* JOURNEYS */}

        <NavLink
          to="/packages"
          onClick={closeMenu}
        >
          Journeys
        </NavLink>


        {/* CULTURE */}

        <NavLink
          to="/culture"
          onClick={closeMenu}
        >
          Culture
        </NavLink>


        {/* JOURNAL */}

        <NavLink
          to="/journal"
          onClick={closeMenu}
        >
          Journal
        </NavLink>


        {/* =================================================
            MOBILE MORE
            ================================================= */}

        <button
          type="button"
          className={`mobile-more-trigger ${
            moreOpen
              ? "active"
              : ""
          }`}
          onClick={() =>
            setMoreOpen(
              (prev) => !prev
            )
          }
        >
          <span>
            More
          </span>

          <ChevronDown
            size={18}
            className={
              moreOpen
                ? "rotate-icon"
                : ""
            }
          />
        </button>


        {/* MOBILE MORE CONTENT */}

        <div
          className={`mobile-more ${
            moreOpen ? "show" : ""
          }`}
        >

          <Link
            to="/destinations"
            onClick={closeMenu}
          >
            Destinations
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/destinations/bangkok"
            onClick={closeMenu}
          >
            Bangkok
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/destinations/phuket"
            onClick={closeMenu}
          >
            Phuket
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/destinations/krabi"
            onClick={closeMenu}
          >
            Krabi
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/destinations/chiang-mai"
            onClick={closeMenu}
          >
            Chiang Mai
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/food"
            onClick={closeMenu}
          >
            Thai Food
            <ArrowUpRight size={16} />
          </Link>

        </div>


        {/* MOBILE CTA */}

        <Link
          to="/contact"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Plan My Trip

          <ArrowUpRight size={18} />
        </Link>

      </div>

    </header>
  );
};

export default Navbar;

