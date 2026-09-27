import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchFilters from '@components/search/SearchFilters'
import FurnitureGrid from '@components/search/FurnitureGrid'
import SearchBar from '@components/common/SearchBar'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 5000000],
    style: '',
    location: '',
  })

  const query = searchParams.get('q') || ''

  return (
    <div className="min-h-screen bg-accent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Find Your Perfect Furniture</h1>
          <SearchBar />
          {query && <p className="mt-4 text-gray-600">Results for: <span className="font-semibold text-primary">'{query}'</span></p>}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SearchFilters filters={filters} setFilters={setFilters} />
            </div>
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
