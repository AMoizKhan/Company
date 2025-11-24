import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import { FaCloud, FaLock, FaServer, FaDatabase, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

export default function CloudComputing() {
  return (
    <div className="p-8 mt-10 text-white">
      <Header />

      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-center mt-16">Cloud Computing Services - MZ Koder</h1>
      <p className="text-lg text-gray-300 text-center mt-10 max-w-3xl mx-auto">
        MZ Koder provides advanced Cloud Computing solutions tailored for all business sizes.
        From secure data storage to scalable hosting, we offer cloud services that improve agility,
        reduce operational costs, and ensure maximum uptime. Our expert team helps your business
        stay ahead with powerful cloud technology.
      </p>

      {/* Image Left - Text Right */}
      <div className="md:flex items-center gap-10 mt-6">
        <img src="/cloud1.jpg" alt="Scalable Infrastructure" className="md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Scalable Infrastructure</h2>
          <p className="text-gray-300">
            Grow your business without limitations. Our cloud infrastructure adapts smoothly to
            increasing business demands while maintaining top performance.
          </p>
        </div>
      </div>

      {/* Image Right - Text Left */}
      <div className="md:flex items-center gap-10 mb-12 flex-row-reverse">
        <img src="/cloud2.jpg" alt="Disaster Recovery" className="md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Disaster Recovery</h2>
          <p className="text-gray-300">
            Ensure business continuity with our advanced disaster recovery solutions.
            We offer automatic backups, redundancy, and rapid recovery options for guaranteed uptime.
          </p>
        </div>
      </div>

      {/* Extra Features */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="p-6 shadow-lg rounded-lg bg-gray-800">
          <FaDatabase className="text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Database Management</h2>
          <p className="text-gray-300">
            Efficiently manage, store, and scale your databases with secure cloud services.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-gray-800">
          <FaShieldAlt className="text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Compliance & Security</h2>
          <p className="text-gray-300">
            MZ Koder ensures top-level compliance and enterprise security for sensitive data.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-gray-800">
          <FaSyncAlt className="text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Seamless Migration</h2>
          <p className="text-gray-300">
            Move your existing systems to the cloud with zero complexity and minimal downtime.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Power Your Business with MZ Koder Cloud</h2>
        <p className="text-gray-300 mb-6">
          Experience next‑level scalability, security, and cost‑efficiency with MZ Koder’s Cloud
          Computing services.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Get Started Today
        </button>
      </div>

      <Footer />
    </div>
  );
}
