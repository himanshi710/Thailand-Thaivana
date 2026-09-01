import DestinationDetail from "../components/DestinationDetail";

const ChiangMai = () => {
  return (
    <DestinationDetail
      name="Chiang Mai."
      subtitle="The Soul of the North"
      location="Northern Thailand"
      description="A slower, soulful side of Thailand where Lanna heritage, misty mountains, creative neighbourhoods and local traditions come together."

      image="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2200&q=90"

      highlights={[
        {
          title: "Doi Suthep",
          text: "Climb into the mountains to discover Chiang Mai's revered golden temple and sweeping views across the city.",
          image:
            "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1400&q=90",
        },

        {
          title: "Old City Temples",
          text: "Walk through ancient lanes surrounded by Lanna architecture, peaceful courtyards and historic temples.",
          image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=90",
        },

        {
          title: "Doi Inthanon",
          text: "Escape into Thailand's highest mountain landscape with waterfalls, forest trails and cool mountain air.",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
        },

        {
          title: "Mae Kampong",
          text: "Slow down in a peaceful mountain village surrounded by forest, streams and traditional northern life.",
          image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=90",
        },

        {
          title: "Nimman",
          text: "Discover Chiang Mai's modern side through independent cafés, creative spaces, boutiques and local design.",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=90",
        },

        {
          title: "Sunday Walking Street",
          text: "Spend an evening among handmade crafts, northern food, local artists and lively streets filled with music.",
          image:
            "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1400&q=90",
        },
      ]}

      itinerary={[
        {
          day: "DAY 01",
          title: "Lanna Heritage",
          text: "Begin inside the Old City with historic temples, quiet lanes and a taste of northern Thai cuisine.",
        },

        {
          day: "DAY 02",
          title: "Into The Mountains",
          text: "Head towards Doi Suthep for mountain views, temple rituals and a slower afternoon surrounded by nature.",
        },

        {
          day: "DAY 03",
          title: "Creative Chiang Mai",
          text: "Explore Nimman cafés, independent boutiques and local creative spaces before discovering the evening food scene.",
        },

        {
          day: "DAY 04",
          title: "Village Escape",
          text: "Leave the city behind for Mae Kampong and experience forest paths, mountain streams and traditional village life.",
        },

        {
          day: "DAY 05",
          title: "Wild North",
          text: "Take a full-day escape towards Doi Inthanon for waterfalls, forest trails and Thailand's highest mountain landscapes.",
        },
      ]}
    />
  );
};

export default ChiangMai;