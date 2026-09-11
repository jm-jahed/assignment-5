export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-20 text-left">
      {/* Heading & Counter */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
        </p>
      </div>

      {/* Conditional Rendering */}
      {count === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl py-10 px-4 text-center text-xs text-gray-400 bg-gray-50/50">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3">
          {/* Selected items*/}
          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2.5 bg-gray-50 hover:bg-gray-100/80 border border-gray-100 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 p-1 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">{item.name}</h4>
                    <p className="text-[10px] text-gray-500 font-medium">{item.category}</p>
                  </div>
                </div>

                {/* Individual Remove  Button */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label={`Remove ${item.name}`}
                  title="Remove"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={onRemoveAll}
              className="w-full py-2 px-3 border border-red-200 hover:bg-red-50 text-red-600 rounded-xl text-xs font-semibold transition-colors"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
