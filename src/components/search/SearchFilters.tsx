import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface SearchFiltersProps {
  filters: any
  setFilters: (filters: any) => void
}

export default function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['category', 'price'])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const categories = ['Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Kitchen']
  const styles = ['Modern', 'Contemporary', 'Minimalist', 'Traditional', 'Scandinavian']
  const priceRanges = [
    { label: 'Under ₦200k', min: 0, max: 200000 },
    { label: '₦200k - ₦500k', min: 200000, max: 500000 },
    { label: '₦500k - ₦1M', min: 500000, max: 1000000 },
    { label: '₦1M - ₦2M', min: 1000000, max: 2000000 },
    { label: 'Over ₦2M', min: 2000000, max: 10000000 },
  ]

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="card">
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between py-2"
        >
          <h3 className="font-semibold">Category</h3>
          <ChevronDown
            size={20}
            className={`transition ${expandedSections.includes('category') ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.includes('category') && (
          <div className="pt-4 space-y-3 border-t border-gray-200">
            {categories.map(cat => (
              <label key={cat} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-3 w-4 h-4" />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="card">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between py-2"
        >
          <h3 className="font-semibold">Price Range</h3>
          <ChevronDown
            size={20}
            className={`transition ${expandedSections.includes('price') ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.includes('price') && (
          <div className="pt-4 space-y-3 border-t border-gray-200">
            {priceRanges.map(range => (
              <label key={range.label} className="flex items-center cursor-pointer">
                <input type="radio" name="price" className="mr-3 w-4 h-4" />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Style Filter */}
      <div className="card">
        <button
          onClick={() => toggleSection('style')}
          className="w-full flex items-center justify-between py-2"
        >
          <h3 className="font-semibold">Style</h3>
          <ChevronDown
            size={20}
            className={`transition ${expandedSections.includes('style') ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.includes('style') && (
          <div className="pt-4 space-y-3 border-t border-gray-200">
            {styles.map(style => (
              <label key={style} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-3 w-4 h-4" />
                <span className="text-sm">{style}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      <button className="w-full btn-secondary">Clear Filters</button>
    </div>
  )
}
