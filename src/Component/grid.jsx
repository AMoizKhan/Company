export default function GridCards({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((item, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
