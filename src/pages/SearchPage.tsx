import { useState } from 'react'
import SearchFilters from '@components/search/SearchFilters'
import FurnitureGrid from '@components/search/FurnitureGrid'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 5000000],
    style: '',
    location: '',
  })

  return (
    <div className="min-h-screen bg-accent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Search Furniture</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search for furniture..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="input-field flex-1"
            />
            <button className="btn-primary">Search</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <SearchFilters filters={filters} setFilters={setFilters} />
          </aside>

          {/* Results */}
          <main className="lg:col-span-3">
            <FurnitureGrid />
          </main>
        </div>
      </div>
    </div>
  )
}
