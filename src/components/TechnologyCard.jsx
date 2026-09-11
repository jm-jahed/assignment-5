export default function TechnologyCard({ tech, isAdded, onToggleStack }) {
  // Helper to color-code badges based on badge name
  const getBadgeStyle = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'popular':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'fast':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'versatile':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'modern':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'standard':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'top sql':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'cache':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'ubiquitous':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'essential':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'robust':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'containers':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full text-left">
      <div>
        {/* Top row: Icon and Badge */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
          {tech.badge && (
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(tech.badge)}`}>
              {tech.badge}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4 min-h-[48px]">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Metadata row: Category chip, Difficulty, Rating with star */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium text-[11px]">
              {tech.category}
            </span>
            <span className="text-[11px] text-gray-500 font-medium">
              {tech.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-700 font-semibold">
            <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{tech.rating}</span>
          </div>
        </div>

        {/* Add to Stack Button */}
        <button
          onClick={() => onToggleStack && onToggleStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all ${
            isAdded
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed'
              : 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow'
          }`}
        >
          {isAdded ? (
            <>
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Added to Stack</span>
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
}
