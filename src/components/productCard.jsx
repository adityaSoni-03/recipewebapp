export default function ProductCard({ image, title, description,user,cook_time }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
      
      {/* Image */}
      <div className="bg-gray-50 p-6 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-64 object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600">
          {description}
        </p>

        {variant && (
          <p className="text-sm italic text-gray-500">
            {variant}
          </p>
        )}

        <p className="text-lg font-semibold text-gray-900">
          ${price}
        </p>
      </div>
    </div>
  );
}
