
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
//     <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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

import { FaShippingFast, FaUsers, FaHeadset, FaSmile } from "react-icons/fa";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { serviceImages } from "@/lib/serviceImages";


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
    <div className="service-page">
      <main className="service-page-container">
      {/* Hero Section */}
      <section className="text-center mb-10 sm:mb-12">
        <PageHeading className="mb-4">Get Noticed With MZ Koders Proven Social Media Marketing Techniques</PageHeading>
        <PageSubheading className="text-gray-300 mb-8">
          At <strong>MZ Koders</strong>, we provide custom social media marketing
          services designed to help your brand stand out, boost engagement, and
          drive traffic and conversions to your website. Our expert team crafts
          tailored strategies aligned with your unique goals and target audience.
        </PageSubheading>
        {/* <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">
          Get Started
        </button> */}
      </section>
      <section className="max-w-6xl  mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <img src={serviceImages.digital[1]} alt="Digital Marketing" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Increase Your Brand’s Visibility with the Right Team!
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Considering the ever-changing trends of Digital Marketing, we are
            your one-stop shop for marketing, content creation, and graphic
            design. Our team ensures quality, relevance, and savage results to
            take your brand to new heights. Let’s work together on the next
            masterpiece!
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
        {highlights.map((item, idx) => (
          <div key={idx} className="service-section-card p-5 sm:p-6 flex flex-col gap-3">
            <div>{item.icon}</div>
            <h2 className="page-heading text-lg sm:text-xl font-semibold text-white">{item.title}</h2>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Services List Left Aligned */}
      <section className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 mb-12 md:mb-16">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="page-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">Maximize Your Online Reach</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6">Online Business Optimization for Brand Recognition</p>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base list-disc list-inside">
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
          <img src={serviceImages.digital[0]} alt="Marketing" className="w-full h-full object-cover" />
        </div>
      </section>
      </main>
    </div>
  );
}