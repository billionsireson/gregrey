import { useParams } from 'react-router-dom'
import { MapPin, Star, MessageSquare, CheckCircle } from 'lucide-react'

const mockBusiness = {
  id: 'b1',
  name: 'LuxeHome Furniture',
  description: 'Premium furniture imported from Europe and custom-made pieces for discerning clients',
  location: 'Ikoyi, Lagos',
  serviceAreas: ['Lagos', 'Abuja'],
  verificationStatus: 'trusted',
  capabilities: ['Custom Furniture', 'Interior Design', 'Delivery & Installation', 'Design Consultation'],
  responseRate: 95,
  averageResponseTime: 2,
  rating: 4.8,
  reviews: 124,
  portfolio: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
    'https://images.unsplash.com/photo-1554995207-c18231b6ce48?w=500',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500',
  ],
}

export default function BusinessProfilePage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="min-h-screen bg-accent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Business Image */}
            <div className="md:w-1/4">
              <div className="bg-gray-300 aspect-square rounded-lg" />
            </div>

            {/* Business Info */}
            <div className="md:w-3/4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{mockBusiness.name}</h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin size={20} />
                    <span>{mockBusiness.location}</span>
                  </div>
                </div>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
                  ✓ {mockBusiness.verificationStatus}
                </span>
              </div>

              <p className="text-gray-700 mb-6 text-lg">{mockBusiness.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{mockBusiness.responseRate}%</div>
                  <div className="text-sm text-gray-600">Response Rate</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{mockBusiness.averageResponseTime}h</div>
                  <div className="text-sm text-gray-600">Avg Response Time</div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-1">
                    <Star size={20} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-primary">{mockBusiness.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">{mockBusiness.reviews} reviews</div>
                </div>
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition">
                <MessageSquare size={20} />
                Send Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Capabilities */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Capabilities & Services</h2>
              <div className="grid grid-cols-2 gap-4">
                {mockBusiness.capabilities.map(cap => (
                  <div key={cap} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
              <div className="grid grid-cols-3 gap-4">
                {mockBusiness.portfolio.map((img, i) => (
                  <div
                    key={i}
                    className="bg-gray-300 aspect-square rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
                  >
                    <img src={img} alt={`Portfolio ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Service Areas */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Service Areas</h3>
              <div className="space-y-2">
                {mockBusiness.serviceAreas.map(area => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-primary text-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <p className="text-sm opacity-90 mb-4">
                Ready to discuss your furniture needs? Send an enquiry now.
              </p>
              <button className="w-full px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
