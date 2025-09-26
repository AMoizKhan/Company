export default function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition p-4">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-4xl"
        />
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mt-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
}
