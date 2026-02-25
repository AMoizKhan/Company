"use client";

import {
  FaShieldAlt,
  FaLock,
  FaNetworkWired,
  FaUserShield,
  FaSearch,
  FaServer,
} from "react-icons/fa";
import GradientButton from "@/Component/GradientButton";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { serviceImages } from "@/lib/serviceImages";

const images = serviceImages.cyber;

export default function CyberSecurity() {
  return (
    <div className="service-page">
      <main className="service-page-container">
        <div className="text-center mb-10 sm:mb-12">
          <PageHeading className="mb-3 sm:mb-4">Cyber Security Services</PageHeading>
          <PageSubheading className="text-gray-300 mb-0">
            Protect your business from threats with enterprise-grade cyber security services.
            We deliver assessment, monitoring, defense and response solutions tailored to your needs.
          </PageSubheading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            { icon: FaShieldAlt, title: "Vulnerability Assessment", desc: "Identify weaknesses with automated scans and manual pentests to prioritize fixes." },
            { icon: FaLock, title: "Endpoint Protection", desc: "Secure devices with advanced endpoint controls, anti-malware and EDR solutions." },
            { icon: FaNetworkWired, title: "Network Security", desc: "Firewalls, segmentation and intrusion detection to prevent lateral movement." },
          ].map((item) => (
            <div key={item.title} className="service-section-card p-5 sm:p-6 text-center">
              <item.icon className="text-3xl sm:text-4xl mx-auto text-blue-400 mb-3 sm:mb-4" />
              <h3 className="page-heading text-lg sm:text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center px-0 md:px-4">
              <h2 className="page-heading text-xl sm:text-2xl font-bold mb-3 text-white">Threat Detection & Monitoring</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Real-time monitoring and threat intelligence help detect suspicious activity early.
                We set up SIEM, alerts and 24/7 monitoring to reduce dwell time and stop attacks fast.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              <img src={images[0]} alt="Threat detection" className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Monitoring"; }} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-10">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-4 md:pr-8">
              <h2 className="page-heading text-xl sm:text-2xl font-bold mb-3 text-white">Incident Response & Backup</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Prepared playbooks, backup & recovery plans, and forensic analysis to restore operations
                quickly and learn from incidents to strengthen defences.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              <img src={images[1]} alt="Incident response" className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Incident+Response"; }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center mt-12 md:mt-16">
          {[
            { icon: FaUserShield, title: "Identity & Access", desc: "MFA, SSO and least-privilege for secure access control." },
            { icon: FaSearch, title: "Compliance & Audit", desc: "ISO/GDPR/HIPAA readiness and audit support for compliance." },
            { icon: FaServer, title: "Secure Cloud", desc: "Cloud hardening, secure configurations and tenant isolation." },
          ].map((item) => (
            <div key={item.title} className="service-section-card p-5 sm:p-6">
              <item.icon className="text-2xl sm:text-3xl mx-auto text-blue-400 mb-2 sm:mb-3" />
              <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
              <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mt-12 md:mt-16">
          <h3 className="page-heading text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">Ready to secure your systems?</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-6">Schedule a security assessment and get a prioritized remediation plan.</p>
          <GradientButton href="/contact">Request Assessment</GradientButton>
        </div>
      </main>
    </div>
  );
}
