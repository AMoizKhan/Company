export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        Welcome to My Home Page
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mb-6">
        This is the starting point of your website.
      </p>

      {/* Button */}
      <button className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
}
