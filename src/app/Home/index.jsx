import Card from "@/Component/card";
import GridCards from "@/Component/grid";
import TestimonialSection from "@/Component/review";

export default function HomePage() {
  const services = [
    {
      title: "Web Development",
      description: "Building modern, responsive, and secure websites.",
    },
    {
      title: "Mobile App Development",
      description: "Custom iOS and Android apps for your business.",
    },
    {
      title: "Ebook Solutions",
      description: "Designing and publishing engaging digital ebooks.",
    },
    {
      title: "Content Writing",
      description: "High-quality, SEO-friendly content for any niche.",
    },
    {
      title: "Digital Marketing",
      description: "Boost your brand with social media and SEO campaigns.",
    },
    {
      title: "Cloud Computing",
      description: "Scalable and secure cloud solutions for enterprises.",
    },
    {
      title: "Game Development",
      description: "Interactive and creative games for web and mobile.",
    },
    {
      title: "Cyber Security",
      description: "Protecting businesses from online threats and attacks.",
    },
    {
      title: "Graphic Design",
      description: "Creative designs to build your unique brand identity.",
    },
  ];
  const grid = [
    { img: "/img1.jpg", title: "Web Development", desc: "Modern websites with Next.js" },
    { img: "/img2.jpg", title: "Mobile Apps", desc: "Cross-platform mobile solutions" },
    { img: "/img3.jpg", title: "Digital Marketing", desc: "Grow your business online" },
    // { img: "/img4.jpg", title: "Cloud Computing", desc: "Secure and scalable solutions" },
    // { img: "/img5.jpg", title: "Cyber Security", desc: "Protect your digital assets" },
    // { img: "/img6.jpg", title: "Graphic Design", desc: "Creative branding & visuals" },
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
        <div className="p-10 bg-gray-100 min-h-screen">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <GridCards data={grid} />
      </div>
        <div className="max-w-7xl mx-auto p-10">
      {/* Section */}
      <section className="grid grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src="/img1.jpg"
            alt="About Service"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Our Service</h2>
          <p className="text-gray-700 leading-relaxed">
            We provide professional web and mobile solutions designed to meet modern business needs. 
            Our team focuses on performance, security, and a user-friendly experience. 
            With years of expertise, we help companies scale digitally and reach a wider audience.
          </p>
        </div>
      </section>
    </div>
        <div className="flex flex-col items-center text-center py-12 px-6">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-600 max-w-2xl mb-10">
        Supercharge your WordPress hosting with detailed website analytics, marketing tools. 
        Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. 
        We're here to help you succeed!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold">
            Q. Why can't people connect to the web server on my PC?
          </h3>
          <p className="text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, 
            complete with Anycast support and extensive DDoS protection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Q. What domain name should I choose for my site?
          </h3>
          <p className="text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, 
            complete with Anycast support and extensive DDoS protection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Q. How can I make my website work without www. in front?
          </h3>
          <p className="text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, 
            complete with Anycast support and extensive DDoS protection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Q. Why does Internet Information Server want a password?
          </h3>
          <p className="text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, 
            complete with Anycast support and extensive DDoS protection.
          </p>
        </div>
      </div>

      <button className="mt-12 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
        Get Support
      </button>
    </div>
    <div>
      <TestimonialSection />
    </div>
    </div>
  );
}
