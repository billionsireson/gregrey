interface SearchFiltersProps {
  filters: any
  setFilters: (filters: any) => void
}

export default function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-6">Filters</h3>

      <div className="space-y-6">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-3">Category</label>
          <select className="input-field">
            <option>All Categories</option>
            <option>Living Room</option>
            <option>Bedroom</option>
            <option>Dining</option>
            <option>Office</option>
            <option>Outdoor</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium mb-3">Price Range</label>
          <input type="range" min="0" max="5000000" className="w-full" />
          <div className="flex justify-between text-sm mt-2">
            <span>₦0</span>
            <span>₦5M+</span>
          </div>
        </div>

        {/* Style */}
        <div>
          <label className="block text-sm font-medium mb-3">Style</label>
          <div className="space-y-2">
            {['Modern', 'Contemporary', 'Minimalist', 'Traditional'].map(style => (
              <label key={style} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-3">Location</label>
          <input
            type="text"
            placeholder="City or area"
            className="input-field"
          />
        </div>

        <button className="btn-primary w-full">Apply Filters</button>
      </div>
    </div>
  )
}
