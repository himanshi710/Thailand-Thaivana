import DestinationDetail from "../components/DestinationDetail";

const Krabi = () => {
  return (
    <DestinationDetail
      name="Krabi"
      subtitle="WHERE LIMESTONE MEETS THE SEA"
      accent="#d8b36a"
      image="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2200&q=90"
      description="A dramatic landscape of limestone cliffs, emerald water, secret beaches and wild island adventures."
      highlights={[
        {
          title: "Railay",
          text: "Arrive by boat and walk beneath towering limestone cliffs.",
          image:
            "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1000&q=85",
        },
        {
          title: "Four Islands",
          text: "Spend a day moving between tropical islands and clear lagoons.",
          image:
            "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1000&q=85",
        },
        {
          title: "Emerald",
          text: "Trade the coast for jungle trails, pools and waterfalls.",
          image:
            "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1000&q=85",
        },
      ]}
      itinerary={[
        {
          day: "DAY 01",
          title: "Railay Morning",
          text: "Take a long-tail boat to Railay and explore the dramatic coast.",
        },
        {
          day: "DAY 02",
          title: "Island Hopping",
          text: "Four islands, turquoise water and a perfect beach afternoon.",
        },
        {
          day: "DAY 03",
          title: "Into The Wild",
          text: "Jungle scenery, emerald pools and a slower final evening.",
        },
      ]}
    />
  );
};

export default Krabi;