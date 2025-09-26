import Card from "@/Component/card";

export default function HomePage() {
  const cardsData = [
    {
      title: "Card One",
      description: "This is the first card.",
      image: "/image/building.jpeg",
    },
    {
      title: "Card Two",
      description: "This is the second card.",
      image: "/image/bg.jpg",
    },
    {
      title: "Card Three",
      description: "This is the third card.",
      image: "/image/sample.jpg",
    },
  ];
  return (
    <div>
      {/* Home Section with Background */}
      <div
        className="flex min-h-screen bg-cover bg-center relative pl-20"
        style={{ backgroundImage: "url('/image/building.png')" }} // image ko public/image folder me rakho
      >
        {/* Dark Overlay for clarity */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Left Side Content */}
        <div className="relative pl-40 mt-36 text-white">
          {/* Main Heading */}
          <h1 className="text-7xl font-extrabold drop-shadow-lg">Tekflow</h1>

          {/* Subheading */}
          <h2 className="text-2xl mt-4 drop-shadow-md">
            Empowering the Future of Tech
          </h2>

          {/* Small Text */}
          <p className="text-lg mt-2 drop-shadow-md">
            Discover innovative solutions, ideas, and growth with us.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>

      {/* Second Section (Editable) */}
      <div className="p-10 bg-gray-100 min-h-screen">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Cards</h1> */}

        {/* Grid for multiple cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
