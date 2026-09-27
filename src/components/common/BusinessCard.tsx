import { MapPin, Star, MessageSquare } from 'lucide-react'
import type { Business } from '@types/index'

interface BusinessCardProps {
  business: Business
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const getTrustBadge = (status: string) => {
    const badges = {
      registered: 'bg-gray-100 text-gray-700',
      verified: 'bg-blue-100 text-blue-700',
      trusted: 'bg-green-100 text-green-700',
      preferred: 'bg-purple-100 text-purple-700',
    }
    return badges[status as keyof typeof badges] || badges.registered
  }

  return (
    <div className="card hover:shadow-lg transition">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{business.name}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin size={16} />
            <span>{business.location}</span>
          </div>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTrustBadge(business.verificationStatus)}`}>
          {business.verificationStatus}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{business.description}</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-y border-gray-200">
        <div>
          <div className="text-sm font-semibold text-primary">{business.responseRate}%</div>
          <div className="text-xs text-gray-600">Response Rate</div>
        </div>
        <div>
          <div className="text-sm font-semibold text-primary">{business.averageResponseTime}h</div>
          <div className="text-xs text-gray-600">Avg Response</div>
        </div>
      </div>

      {/* Capabilities */}
      {business.capabilities.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">Specialties</p>
          <div className="flex gap-2 flex-wrap">
            {business.capabilities.slice(0, 3).map(cap => (
              <span key={cap} className="text-xs bg-accent px-2 py-1 rounded">
                {cap}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action */}
      <button className="w-full flex items-center justify-center gap-2 btn-primary">
        <MessageSquare size={16} />
        Send Enquiry
      </button>
    </div>
  )
}
