"use client";

import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import {
  FaShieldAlt,
  FaLock,
  FaNetworkWired,
  FaUserShield,
  FaSearch,
  FaServer,
} from "react-icons/fa";

export default function CyberSecurity() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
        <Header/>
      <h1 className="text-4xl font-bold text-center mb-6">Cyber Security Services</h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Protect your business from threats with enterprise-grade cyber security services.
        We deliver assessment, monitoring, defense and response solutions tailored to your needs.
      </p>

      {/* Features grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaShieldAlt className="text-4xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Vulnerability Assessment</h3>
          <p className="text-gray-600 text-sm">
            Identify weaknesses with automated scans and manual pentests to prioritize fixes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaLock className="text-4xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Endpoint Protection</h3>
          <p className="text-gray-600 text-sm">
            Secure devices with advanced endpoint controls, anti-malware and EDR solutions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaNetworkWired className="text-4xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Network Security</h3>
          <p className="text-gray-600 text-sm">
            Firewalls, segmentation and intrusion detection to prevent lateral movement.
          </p>
        </div>
      </div>

      {/* Image Right - Text Left */}
      <div className="md:flex items-center gap-10 mb-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Threat Detection & Monitoring</h2>
          <p className="text-gray-700 leading-relaxed">
            Real-time monitoring and threat intelligence help detect suspicious activity early.
            We set up SIEM, alerts and 24/7 monitoring to reduce dwell time and stop attacks fast.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image: monitoring dashboard (place /public/cyber1.jpg)
          </div>
        </div>
      </div>

      {/* Image Left - Text Right */}
      <div className="md:flex items-center gap-10 mb-12 flex-row-reverse">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Incident Response & Backup</h2>
          <p className="text-gray-700 leading-relaxed">
            Prepared playbooks, backup & recovery plans, and forensic analysis to restore operations
            quickly and learn from incidents to strengthen defences.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image: incident response (place /public/cyber2.jpg)
          </div>
        </div>
      </div>

      {/* Extra features */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <FaUserShield className="text-3xl mx-auto text-blue-600 mb-3" />
          <h4 className="font-semibold mb-2">Identity & Access</h4>
          <p className="text-gray-600 text-sm">MFA, SSO and least-privilege for secure access control.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <FaSearch className="text-3xl mx-auto text-blue-600 mb-3" />
          <h4 className="font-semibold mb-2">Compliance & Audit</h4>
          <p className="text-gray-600 text-sm">ISO/GDPR/HIPAA readiness and audit support for compliance.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <FaServer className="text-3xl mx-auto text-blue-600 mb-3" />
          <h4 className="font-semibold mb-2">Secure Cloud</h4>
          <p className="text-gray-600 text-sm">Cloud hardening, secure configurations and tenant isolation.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-3">Ready to secure your systems?</h3>
        <p className="text-gray-700 mb-6">Schedule a security assessment and get a prioritized remediation plan.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md">Request Assessment</button>
      </div>
      <Footer/>
    </div>
  );
}
