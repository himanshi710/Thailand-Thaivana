import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Bangkok from "./pages/Bangkok";
import Phuket from "./pages/Phuket";
import Krabi from "./pages/Krabi";
import ChiangMai from "./pages/ChiangMai";
import Experiences from "./pages/Experiences";
import Packages from "./pages/Packages";
import Culture from "./pages/Culture";
import Food from "./pages/Food";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/bangkok" element={<Bangkok />} />
          <Route path="/destinations/phuket" element={<Phuket />} />
          <Route path="/destinations/krabi" element={<Krabi />} />
          <Route
            path="/destinations/chiang-mai"
            element={<ChiangMai />}
          />

          <Route path="/experiences" element={<Experiences />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/food" element={<Food />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;