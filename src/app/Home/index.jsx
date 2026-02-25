"use client";

import dynamic from "next/dynamic";
import Card from "@/Component/card";
import FAQ from "@/Component/FAQs";
import GradientButton from "@/Component/GradientButton";
import GridCards from "@/Component/grid";
import TestimonialSection from "@/Component/review";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { serviceImages, homeImages } from "@/lib/serviceImages";
import { motion } from "framer-motion";

const GodRays = dynamic(() => import("@/Component/GodRays"), { ssr: false });
const SplitText = dynamic(() => import("@/Component/SplitText"), { ssr: false });




export default function HomePage() {
  const services = [
    {
      title: "Web Development",
      description: "We specialize in building modern, responsive, and secure websites that deliver seamless user experiences and help your brand stand out in the digital world.",
      link: "/services/web",
    },
    {
      title: "Mobile App Development",
      description: "We create custom iOS and Android apps tailored to your business needs, ensuring seamless performance and user-friendly design.",
      link: "/services/app",
    },
    { title: "Artificial Intelligence", description: "We build intelligent AI solutions that automate processes, enhance decision-making, and drive business growth.", link: "/services/ai" },
    {
      title: "Content Writing",
      description: "From high-quality, SEO-friendly content to engaging digital eBooks, we craft words that inform, inspire, and strengthen your brand’s digital presence.",
      link: "/services/ebook",
    },
    { title: "Digital Marketing", description: "We help boost your brand visibility through powerful social media strategies and result-driven SEO campaigns.", link: "/services/digital-marketing" },
    // {
    //   title: "Cloud Computing",
    //   description: "We provide scalable, reliable, and secure cloud solutions that empower businesses to grow and innovate.",
    // }
    // ,
    // {
    //   title: "Game Development",
    //   description: "We build interactive and engaging games for web and mobile, delivering fun and immersive experiences.",
    // }
    // ,
    // {
    //   title: "Video Editing",
    //   description: "We craft professional, engaging, and high-quality videos that bring your ideas and brand stories to life.",
    // }
    // ,
    { title: "Graphic Design", description: "We create stunning and creative designs that build a strong, unique, and lasting brand identity.", link: "/services/graphic-design" },
  ];
  const grid = [
    { img: serviceImages.web[0], title: "Web Development", desc: "Modern websites with Next.js", link: "/services/web" },
    { img: serviceImages.app[0], title: "Mobile Apps", desc: "Cross-platform mobile solutions", link: "/services/app" },
    { img: serviceImages.digital[0], title: "Digital Marketing", desc: "Grow your business online", link: "/services/digital-marketing" },
    { img: serviceImages.ai[0], title: "Artificial Intelligence", desc: "AI solutions that drive growth", link: "/services/ai" },
    { img: serviceImages.ebook[0], title: "Content Writing", desc: "SEO content & eBooks", link: "/services/ebook" },
    { img: serviceImages.graphic[0], title: "Graphic Design", desc: "Creative branding & visuals", link: "/services/graphic-design" },
  ];
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };


  return (
    <div>
      {/* Home Section with Background */}
      <GodRays />
      <div
        className="relative min-h-screen flex flex-col justify-center text-white"
      // style={{ backgroundImage: "url('/image/ai-bg.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Left Side Content */}

        <div className="relative flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 pt-20 sm:pt-24 pb-12 text-white text-center lg:text-left">
          {/* Left Side - Text */}
          <div className="flex flex-col items-center lg:items-start max-w-lg w-full">
            {/* Main Heading */}
            <SplitText
              text="MZ KODERS"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-4 sm:mt-8 lg:mt-12"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 drop-shadow-md">
              Empowering the Future of Tech
            </h2>

            {/* Small Text */}
            <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 drop-shadow-md max-w-xl">
              Discover innovative solutions and growth with us.
              We empower businesses through modern strategies and creative ideas.
              From digital transformation to branding, we help you scale with confidence.
              Together, we shape a future driven by technology and innovation.
            </p>

            {/* Button */}
            <div className="w-40 mt-4">
             <GradientButton>
                Read More
              </GradientButton>
            </div>
          </div>

          {/* Right Side - Image with animation */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={homeImages.hero} alt="Empowering the future of tech" className="w-full h-[280px] sm:h-[320px] object-cover rounded-xl border border-white/10 shadow-xl" loading="lazy" />
          </motion.div>
        </div>


      </div>


      {/* Second Section (Editable) */}
      <div className="px-4 sm:px-6 md:p-10 bg-transparent min-h-screen text-center">
        <div className="px-4 sm:px-6 md:p-10 bg-transparent min-h-screen text-center">
          <div className="mt-8 sm:mt-10 mb-6">
            <PageHeading className="px-4 sm:px-7 py-2">Our Services</PageHeading>
          </div>





          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => service.link && (window.location.href = service.link)}
                className="cursor-pointer"
              >
                <Card
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                  className="shadow-lg hover:shadow-xl transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <GridCards data={grid} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:p-10">
        {/* Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left Image */}
          <div className="order-1 md:order-none">
            <img
              src={homeImages.aboutSection}
              alt="About Our Service"
              className="w-full h-80 object-cover rounded-xl shadow-lg border border-white/10"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="order-2 md:order-none">
            <h2 className="page-heading text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">About Our Service</h2>
            <p className="page-subheading text-left text-gray-200 leading-relaxed text-sm sm:text-base">
              We provide professional web and mobile solutions designed to meet modern business needs.
              Our team focuses on performance, security, and a user-friendly experience.
              With years of expertise, we help companies scale digitally and reach a wider audience.
            </p>
          </div>
        </section>
      </div>
      {/* <div className="flex flex-col items-center text-center py-12 px-6">
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
      </div> */}
      <div>
        <FAQ />
      </div>
      <div>
        <TestimonialSection />
      </div>
    </div>
  );
}
