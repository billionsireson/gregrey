import { useState } from 'react'
import { Heart } from 'lucide-react'
import type { Furniture } from '@types/index'

interface FurnitureCardProps {
  furniture: Furniture
  onSave?: (furniture: Furniture) => void
  isSaved?: boolean
}

export default function FurnitureCard({ furniture, onSave, isSaved = false }: FurnitureCardProps) {
  const [saved, setSaved] = useState(isSaved)

  const handleSave = () => {
    setSaved(!saved)
    if (onSave) onSave(furniture)
  }

  const formatPrice = (price: number | { min: number; max: number }): string => {
    if (typeof price === 'number') {
      return `₦${price.toLocaleString('en-NG')}`
    }
    return `₦${price.min.toLocaleString('en-NG')} - ₦${price.max.toLocaleString('en-NG')}`
  }

  return (
    <div className="card hover:shadow-lg transition cursor-pointer group overflow-hidden">
      {/* Image Container */}
      <div className="relative bg-gray-200 aspect-square rounded-lg mb-4 overflow-hidden">
        {furniture.images && furniture.images[0] ? (
          <img
            src={furniture.images[0]}
            alt={furniture.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span>No image</span>
          </div>
        )}

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
        >
          <Heart
            size={20}
            className={saved ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>

        {/* Availability Badge */}
        {furniture.availability && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-secondary text-xs font-semibold rounded-full">
            {furniture.availability === 'ready'
              ? 'In Stock'
              : furniture.availability === 'made-to-order'
                ? 'Made-to-Order'
                : 'Limited Stock'}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">{furniture.category}</p>
          <h3 className="text-lg font-semibold group-hover:text-primary transition">{furniture.name}</h3>
        </div>

        {furniture.description && (
          <p className="text-sm text-gray-600 line-clamp-2">{furniture.description}</p>
        )}

        {furniture.materials && furniture.materials.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {furniture.materials.slice(0, 2).map(material => (
              <span key={material} className="text-xs bg-accent px-2 py-1 rounded">
                {material}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
          <span className="text-lg font-bold text-primary">{formatPrice(furniture.price)}</span>
          <button className="text-sm font-medium text-primary hover:underline">View Details</button>
        </div>
      </div>
    </div>
  )
}
