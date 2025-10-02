// FAQ.js
"use client";

export default function FAQ() {
  return (
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
  );
}
