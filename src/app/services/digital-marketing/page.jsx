
// "use client";

// import Header from "@/Component/Header";
// import Footer from "@/Component/Footer";
// import Image from "next/image";

// export default function SocialMediaMarketing() {
//   const highlights = [
//     {
//       title: "Fast Delivery",
//       desc: "Shortest turnaround time in the design industry.",
//     },
//     {
//       title: "10,000+ Customers",
//       desc: "Trusted by businesses all around the globe.",
//     },
//     {
//       title: "24/7 Live Support",
//       desc: "Next-level customer support anytime you need it.",
//     },
//     {
//       title: "100% Satisfaction",
//       desc: "We ensure every client is happy with results.",
//     },
//   ];

//   const services = [
//     "Reach Your Audience Effectively",
//     "Increase Engagement on All Platforms",
//     "Grow Facebook Likes & Followers",
//     "Create High-Impact Promotional Posts",
//   ];

//   return (
//     <div className="bg-transparent text-white min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <section className="max-w-5xl mx-auto px-6 py-16 text-center">
//         <h1 className="text-4xl font-bold mb-4">
//           Get Noticed With MZ Koders Proven Social Media Marketing Techniques
//         </h1>
//         <p className="text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed">
//           At <strong>MZ Koders</strong>, we provide custom social media marketing
//           services designed to help your brand stand out, boost engagement, and
//           drive traffic and conversions to your website. Our expert team crafts
//           tailored strategies aligned with your unique goals and target audience.
//         </p>
//         <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">
//           Get Started
//         </button>
//       </section>
//       <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
//   <div className="relative w-full h-72">
//     <Image
//       src="/image/digital.png" // apni image dal dena public folder me
//       alt="Digital Marketing"
//       fill
//       className="rounded-xl object-cover"
//     />
//   </div>
//   <div>
//     <h2 className="text-2xl font-bold mb-4">
//       Increase Your Brand’s Visibility with the Right Team!
//     </h2>
//     <p className="text-gray-700 leading-relaxed">
//       Considering the ever-changing trends of Digital Marketing, we are
//       your one-stop shop for marketing, content creation, and graphic
//       design. Our team ensures quality, relevance, and savage results to
//       take your brand to new heights. Let’s work together on the next
//       masterpiece!
//     </p>
//   </div>
// </section>

//       {/* Highlights Cards */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {highlights.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-transparent border border-white/30 p-6 rounded-xl flex flex-col gap-4 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold">{item.title}</h2>
//             <p className="text-gray-200 text-sm">{item.desc}</p>
//           </div>
//         ))}
//       </section>

//       {/* Services List */}
//       <section className="max-w-5xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold mb-6 text-center">
//           Maximize Your Online Reach
//         </h2>
//         <p className="text-gray-200 text-center mb-8">
//           Online Business Optimization for Brand Recognition
//         </p>
//         <ul className="max-w-md mx-auto space-y-4 text-gray-200 list-disc list-inside text-left">
//           {services.map((service, idx) => (
//             <li key={idx}>{service}</li>
//           ))}
//         </ul>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";

import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Image from "next/image";
import { FaShippingFast, FaUsers, FaHeadset, FaSmile } from "react-icons/fa";


export default function SocialMediaMarketing() {
  const highlights = [
    {
      title: "Fast Delivery",
      desc: "Shortest turnaround time in the design industry.",
      icon: <FaShippingFast className="text-blue-500 text-3xl" />,
    },
    {
      title: "10,000+ Customers",
      desc: "Trusted by businesses all around the globe.",
      icon: <FaUsers className="text-blue-500  text-3xl" />,
    },
    {
      title: "24/7 Live Support",
      desc: "Next-level customer support anytime you need it.",
      icon: <FaHeadset className="text-blue-500  text-3xl" />,
    },
    {
      title: "100% Satisfaction",
      desc: "We ensure every client is happy with results.",
      icon: <FaSmile className="text-blue-500  text-3xl" />,
    },
  ];

  const services = [
    "Reach Your Audience Effectively",
    "Increase Engagement on All Platforms",
    "Grow Facebook Likes & Followers",
    "Create High-Impact Promotional Posts",
  ];

  return (
    <div className="bg-transparent text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Get Noticed With MZ Koders Proven Social Media Marketing Techniques
        </h1>
        <p className="text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
          At <strong>MZ Koders</strong>, we provide custom social media marketing
          services designed to help your brand stand out, boost engagement, and
          drive traffic and conversions to your website. Our expert team crafts
          tailored strategies aligned with your unique goals and target audience.
        </p>
        {/* <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">
          Get Started
        </button> */}
      </section>
      <section className="max-w-6xl  mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72">
          <Image
            src="/image/digital.png" // apni image dal dena public folder me
            alt="Digital Marketing"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Increase Your Brand’s Visibility with the Right Team!
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Considering the ever-changing trends of Digital Marketing, we are
            your one-stop shop for marketing, content creation, and graphic
            design. Our team ensures quality, relevance, and savage results to
            take your brand to new heights. Let’s work together on the next
            masterpiece!
          </p>
        </div>
      </section>
      {/* Highlights Grid with Images */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-transparent border border-white/30 p-6 rounded-xl flex flex-col gap-4 hover:shadow-lg transition"
          >
            <div>{item.icon}</div>
            <h2 className="text-xl font-semibold text-left">{item.title}</h2>
            <p className="text-gray-200 text-left text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Services List Left Aligned */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text + List */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-6">Maximize Your Online Reach</h2>
          <p className="text-gray-200 mb-8">
            Online Business Optimization for Brand Recognition
          </p>
          <ul className="space-y-4 text-gray-200 list-disc list-inside">
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 relative w-full h-60   overflow-hidden">
          <Image
            src="/image/mega1.png" // replace with your actual image in public folder
            alt="Digital Marketing"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl  mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72">
          <Image
            src="/image/digital.png" // apni image dal dena public folder me
            alt="Digital Marketing"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Increase Your Brand’s Visibility with the Right Team!
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Considering the ever-changing trends of Digital Marketing, we are
            your one-stop shop for marketing, content creation, and graphic
            design. Our team ensures quality, relevance, and savage results to
            take your brand to new heights. Let’s work together on the next
            masterpiece!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
