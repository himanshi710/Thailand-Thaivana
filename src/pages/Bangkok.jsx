
import DestinationDetail from "../components/DestinationDetail";

const Bangkok = () => {
  return (
    <DestinationDetail
      name="Bangkok"
      subtitle="THE CITY THAT NEVER SLEEPS"
      accent="#f59b83"
      image="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=2200&q=90"
      description="A city of contrasts where ancient temples, creative neighbourhoods, incredible food and electric nights come together in one unforgettable rhythm."

      /* =====================================================
         HIGHLIGHTS
      ===================================================== */

      highlights={[
        {
          title: "Wat Arun",
          text: "Watch Bangkok's iconic riverside temple glow in the morning light.",
          image:
            "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=90",
        },

        {
          title: "Grand Palace",
          text: "Step into one of Thailand's most spectacular royal landmarks.",
          image:
            "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=90",
        },

        {
          title: "Chinatown",
          text: "Follow neon streets, tiny food stalls and centuries of local stories.",
          image:
            "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=90",
        },

        {
          title: "Rooftop Nights",
          text: "See Bangkok transform beneath you from one of its unforgettable rooftops.",
          image:
            "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1200&q=90",
        },

        {
          title: "Floating Markets",
          text: "Discover colourful boats, local flavours and life along Bangkok's waterways.",
          image:
            "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=90",
        },

        {
          title: "Street Food",
          text: "Taste smoky grills, spicy noodles and legendary Thai flavours after dark.",
          image:
            "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=90",
        },
      ]}

      /* =====================================================
         ITINERARY
      ===================================================== */

      itinerary={[
        {
          day: "DAY 01",
          title: "Temple Morning",
          text: "Begin beside the Chao Phraya with Wat Arun, Wat Pho and the Grand Palace before slowing down beside the river.",
        },

        {
          day: "DAY 02",
          title: "Old Bangkok",
          text: "Explore historic neighbourhoods, hidden cafés and beautiful streets filled with local character.",
        },

        {
          day: "DAY 03",
          title: "Markets & Flavours",
          text: "Start with a local market, wander through Chinatown and spend the evening discovering Bangkok's legendary street food.",
        },

        {
          day: "DAY 04",
          title: "Creative Bangkok",
          text: "Discover galleries, design spaces, independent cafés and the creative side of the city.",
        },

        {
          day: "DAY 05",
          title: "River Escape",
          text: "Cruise through Bangkok's waterways, explore riverside communities and experience a slower side of the capital.",
        },

        {
          day: "DAY 06",
          title: "City Lights",
          text: "Spend the day exploring Sukhumvit before watching the sunset from a spectacular rooftop.",
        },

        {
          day: "DAY 07",
          title: "Bangkok Your Way",
          text: "Keep the final day open for shopping, spa time, favourite neighbourhoods or one last unforgettable Thai meal.",
        },
      ]}
    />
  );
};

export default Bangkok;

