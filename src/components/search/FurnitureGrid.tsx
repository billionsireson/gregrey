import FurnitureCard from '@components/common/FurnitureCard'
import type { Furniture } from '@types/index'

// Mock data for demonstration
const mockFurniture: Furniture[] = [
  {
    id: '1',
    businessId: 'b1',
    name: 'Modern Cream Boucle Sofa',
    description: 'Beautiful 7-seater curved sofa with premium boucle upholstery',
    category: 'Living Room',
    style: 'Modern',
    price: 1250000,
    availability: 'ready',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'],
    materials: ['Boucle', 'Wood Frame'],
  },
  {
    id: '2',
    businessId: 'b1',
    name: 'Wooden Dining Set',
    description: '8-seater dining table with comfortable chairs',
    category: 'Dining',
    style: 'Contemporary',
    price: { min: 800000, max: 1200000 },
    availability: 'made-to-order',
    images: ['https://images.unsplash.com/photo-1554995207-c18231b6ce48?w=500'],
    materials: ['Solid Wood', 'Upholstery'],
  },
  {
    id: '3',
    businessId: 'b2',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic chair for long hours of comfortable work',
    category: 'Office',
    style: 'Modern',
    price: 450000,
    availability: 'ready',
    images: ['https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500'],
    materials: ['Mesh', 'Metal Base'],
  },
  {
    id: '4',
    businessId: 'b2',
    name: 'Queen Size Bed Frame',
    description: 'Solid wood bed frame with storage underneath',
    category: 'Bedroom',
    style: 'Minimalist',
    price: 750000,
    availability: 'ready',
    images: ['https://images.unsplash.com/photo-1540932239986-310128078ceb?w=500'],
    materials: ['Oak Wood', 'Plywood'],
  },
  {
    id: '5',
    businessId: 'b3',
    name: 'Marble Coffee Table',
    description: 'Elegant marble top with steel base',
    category: 'Living Room',
    style: 'Modern',
    price: 380000,
    availability: 'limited',
    images: ['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500'],
    materials: ['Marble', 'Steel'],
  },
  {
    id: '6',
    businessId: 'b3',
    name: 'Wall-Mounted Bookshelf',
    description: 'Modern floating shelf perfect for any room',
    category: 'Office',
    style: 'Contemporary',
    price: 280000,
    availability: 'ready',
    images: ['https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500'],
    materials: ['MDF', 'Metal Brackets'],
  },
]

interface FurnitureGridProps {
  items?: Furniture[]
  isLoading?: boolean
}

export default function FurnitureGrid({ items = mockFurniture, isLoading = false }: FurnitureGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="bg-gray-300 aspect-square rounded-lg mb-4" />
            <div className="h-4 bg-gray-300 rounded mb-2" />
            <div className="h-4 bg-gray-300 rounded w-3/4" />
          </div>
        ))}
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No furniture found. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Results</h2>
        <span className="text-sm text-gray-600">{items.length} items found</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(furniture => (
          <FurnitureCard key={furniture.id} furniture={furniture} />
        ))}
      </div>
    </div>
  )
}
