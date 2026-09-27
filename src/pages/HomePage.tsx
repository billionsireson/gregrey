import { Link } from 'react-router-dom'
import Hero from '@components/common/Hero'
import FurnitureCard from '@components/common/FurnitureCard'
import BusinessCard from '@components/common/BusinessCard'
import { Sparkles, Zap, Shield, Truck } from 'lucide-react'
import type { Furniture, Business } from '@types/index'

const featuredFurniture: Furniture[] = [
  {
    id: '1',
    businessId: 'b1',
    name: 'Premium Leather Sofa',
    description: '5-seater leather sofa with reclining feature',
    category: 'Living Room',
    style: 'Modern',
    price: 2500000,
    availability: 'ready',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'],
    materials: ['Leather', 'Wood'],
  },
  {
    id: '2',
    businessId: 'b2',
    name: 'Minimalist Dining Set',
    description: '6-seater dining table, space-saving design',
    category: 'Dining',
    style: 'Minimalist',
    price: 1100000,
    availability: 'made-to-order',
    images: ['https://images.unsplash.com/photo-1554995207-c18231b6ce48?w=500'],
    materials: ['Wood', 'Metal'],
  },
  {
    id: '3',
    businessId: 'b3',
    name: 'Scandinavian Bed',
    description: 'Light wood bed with minimalist design',
    category: 'Bedroom',
    style: 'Scandinavian',
    price: 890000,
    availability: 'ready',
    images: ['https://images.unsplash.com/photo-1540932239986-310128078ceb?w=500'],
    materials: ['Birch Wood', 'Fabric'],
  },
]

const featuredBusinesses: Business[] = [
  {
    id: 'b1',
    name: 'LuxeHome Furniture',
    description: 'Premium furniture imported from Europe and custom-made pieces',
    location: 'Ikoyi, Lagos',
    serviceAreas: ['Lagos', 'Abuja'],
    verificationStatus: 'trusted',
    capabilities: ['Custom Furniture', 'Interior Design', 'Delivery'],
    responseRate: 95,
    averageResponseTime: 2,
  },
  {
    id: 'b2',
    name: 'Modern Spaces',
    description: 'Contemporary furniture for modern living',
    location: 'Victoria Island, Lagos',
    serviceAreas: ['Lagos'],
    verificationStatus: 'verified',
    capabilities: ['Delivery', 'Installation', 'Design Consultation'],
    responseRate: 88,
    averageResponseTime: 4,
  },
  {
    id: 'b3',
    name: 'Artisan Woodworks',
    description: 'Handcrafted wooden furniture with attention to detail',
    location: 'Magodo, Lagos',
    serviceAreas: ['Lagos', 'Surrounding Areas'],
    verificationStatus: 'trusted',
    capabilities: ['Custom Design', 'Handcrafted', 'Restoration'],
    responseRate: 92,
    averageResponseTime: 3,
  },
]

const features = [
  {
    icon: Sparkles,
    title: 'Smart Discovery',
    description: 'Find furniture through search, browse, or image upload',
  },
  {
    icon: Zap,
    title: 'Instant Matching',
    description: 'Get matched with businesses that fit your needs perfectly',
  },
  {
    icon: Shield,
    title: 'Verified Businesses',
    description: 'All businesses are verified for your peace of mind',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Track your order and get your furniture safely delivered',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose GREGREY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary text-secondary rounded-lg">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Furniture */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Featured Furniture</h2>
            <Link to="/search" className="text-primary font-semibold hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredFurniture.map(furniture => (
              <FurnitureCard key={furniture.id} furniture={furniture} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Top Rated Businesses</h2>
            <Link to="/search" className="text-primary font-semibold hover:underline">
              Browse All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBusinesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of customers discovering furniture the smart way. Find it. Match it. Get it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/search"
              className="px-8 py-3 bg-secondary text-primary rounded-lg font-semibold hover:opacity-90 transition"
            >
              Start Shopping Now
            </Link>
            <button className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-primary transition">
              Request Custom Furniture
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
