import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import { FaCloud, FaLock, FaServer, FaDatabase, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

export default function CloudComputing() {
  return (
    <div className="p-8">
      {/* Hero Section */}
      <Header />
      <h1 className="text-4xl font-bold text-center mb-6">Cloud Computing Services</h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        SavTech Digital offers robust Cloud Computing solutions tailored to businesses of all sizes.
        From secure data storage to scalable hosting, we provide cloud solutions that enhance agility,
        reduce costs, and ensure maximum uptime. Our expert team makes sure your business stays
        ahead with the power of cloud.
      </p>

      {/* Grid Features */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="p-6 shadow-lg rounded-lg">
          <FaCloud className="text-4xl mx-auto text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cloud Storage</h2>
          <p className="text-gray-600">
            Secure and scalable storage for all your business data and applications in the cloud.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <FaLock className="text-4xl mx-auto text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p className="text-gray-600">
            Advanced cloud security solutions to safeguard sensitive business information.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <FaServer className="text-4xl mx-auto text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cloud Hosting</h2>
          <p className="text-gray-600">
            Fast and reliable hosting services that scale with your growing business.
          </p>
        </div>
      </div>

      {/* Image Left - Text Right */}
      <div className="md:flex items-center gap-10 mb-12">
        <img
          src="/cloud1.jpg"
          alt="Scalable Infrastructure"
          className="md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Scalable Infrastructure</h2>
          <p className="text-gray-700">
            Grow your business without worrying about infrastructure limits. Our scalable cloud
            systems adapt to your business demands while maintaining performance and efficiency.
          </p>
        </div>
      </div>

      {/* Image Right - Text Left */}
      <div className="md:flex items-center gap-10 mb-12 flex-row-reverse">
        <img
          src="/cloud2.jpg"
          alt="Disaster Recovery"
          className="md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Disaster Recovery</h2>
          <p className="text-gray-700">
            Ensure business continuity with our advanced disaster recovery solutions.
            We provide automatic backups, redundancy, and recovery options for maximum uptime.
          </p>
        </div>
      </div>

      {/* Extra Features Center */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="p-6 shadow-lg rounded-lg">
          <FaDatabase className="text-4xl mx-auto text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Database Management</h2>
          <p className="text-gray-600">
            Manage, store, and scale databases efficiently with our cloud solutions.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <FaShieldAlt className="text-4xl mx-auto text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Compliance & Security</h2>
          <p className="text-gray-600">
            Stay compliant with industry standards and protect your data with enterprise-grade
            security.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <FaSyncAlt className="text-4xl mx-auto text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Seamless Migration</h2>
          <p className="text-gray-600">
            Effortlessly migrate your existing systems to the cloud with minimal downtime.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Empower Your Business with Cloud</h2>
        <p className="text-gray-700 mb-6">
          With SavTech Digital’s Cloud Computing services, experience the future of business
          technology. We ensure scalability, security, and cost-effectiveness for your business.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Get Started Today
        </button>
      </div>
      <Footer/>
    </div>
  );
}
