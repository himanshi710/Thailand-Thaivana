
import DestinationDetail from "../components/DestinationDetail";

const Phuket = () => {
  return (
    <DestinationDetail
      name="Phuket."
      subtitle="ISLAND PARADISE"
      location="Andaman Sea, Thailand"
      description="Where emerald waters meet soft white sand, jungle-covered hills rise behind hidden bays, and every sunset feels like its own little celebration."

      image="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=2200&q=90"

      highlights={[
        {
          title: "Freedom Beach",
          text: "Escape the busy coastline and discover one of Phuket's most beautiful hidden beaches.",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90",
        },

        {
          title: "Old Phuket Town",
          text: "Colourful Sino-Portuguese architecture, creative cafés and streets filled with local character.",
          image:
            "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1600&q=90",
        },

        {
          title: "Island Hopping",
          text: "Set sail across the Andaman Sea for limestone islands, hidden lagoons and crystal-clear water.",
          image:
            "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1600&q=90",
        },

        {
          title: "Promthep Cape",
          text: "End the day at Phuket's legendary viewpoint as the sun disappears into the Andaman horizon.",
          image:
            "https://images.unsplash.com/photo-1470214304380-aadaedcfff1b?auto=format&fit=crop&w=1600&q=90",
        },
      ]}

      itinerary={[
        {
          day: "DAY 01",
          title: "Old Town & Island Rhythm",
          text: "Begin with colourful Old Phuket Town, local cafés and an easy afternoon by the sea.",
        },

        {
          day: "DAY 02",
          title: "Into The Andaman",
          text: "Take a private boat towards nearby islands, swim in turquoise lagoons and stay for sunset.",
        },

        {
          day: "DAY 03",
          title: "Beach To Sunset",
          text: "Spend a slow morning at Freedom Beach before exploring viewpoints and ending at Promthep Cape.",
        },

        {
          day: "DAY 04",
          title: "Phuket After Dark",
          text: "Discover night markets, beachside dining and Phuket's vibrant evening atmosphere.",
        },
      ]}
    />
  );
};

export default Phuket;

