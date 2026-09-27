import { useState } from 'react'
import { Heart, MessageSquare, FileText, User, LogOut } from 'lucide-react'

const mockUser = {
  name: 'Seun Adewale',
  email: 'seun@example.com',
  location: 'Lagos, Nigeria',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
}

const mockSavedItems = [
  { id: 1, name: 'Modern Sofa', price: '₦1.2M', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' },
  { id: 2, name: 'Wooden Dining Set', price: '₦850k', image: 'https://images.unsplash.com/photo-1554995207-c18231b6ce48?w=500' },
  { id: 3, name: 'Office Chair', price: '₦450k', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500' },
]

const mockEnquiries = [
  { id: 1, furniture: 'Premium Leather Sofa', business: 'LuxeHome', status: 'responded', date: '2024-01-15' },
  { id: 2, furniture: 'Dining Table Set', business: 'Modern Spaces', status: 'pending', date: '2024-01-10' },
  { id: 3, furniture: 'Office Desk', business: 'Artisan Woodworks', status: 'quoted', date: '2024-01-05' },
]

export default function CustomerAccountPage() {
  const [activeTab, setActiveTab] = useState('saved')

  const tabs = [
    { id: 'saved', label: 'Saved Items', icon: Heart },
    { id: 'enquiries', label: 'Enquiries', icon: FileText },
    { id: 'conversations', label: 'Conversations', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-700',
      responded: 'bg-blue-100 text-blue-700',
      quoted: 'bg-green-100 text-green-700',
    }
    return badges[status as keyof typeof badges] || badges.pending
  }

  return (
    <div className="min-h-screen bg-accent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with User Info */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h1 className="text-3xl font-bold mb-1">{mockUser.name}</h1>
                <p className="text-gray-600">{mockUser.email}</p>
                <p className="text-gray-600">{mockUser.location}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 text-red-600 hover:bg-red-50 rounded-lg transition">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex overflow-x-auto border-b border-gray-200">
            {tabs.map(tab => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'saved' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Saved Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockSavedItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gray-300 aspect-video overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-primary font-bold mb-4">{item.price}</p>
                    <button className="w-full px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'enquiries' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Enquiries</h2>
            <div className="space-y-4">
              {mockEnquiries.map(enquiry => (
                <div key={enquiry.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{enquiry.furniture}</h3>
                      <p className="text-gray-600">Business: {enquiry.business}</p>
                      <p className="text-sm text-gray-500 mt-1">Sent on: {enquiry.date}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-medium ${getStatusBadge(enquiry.status)}`}>
                      {enquiry.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'conversations' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Conversations</h2>
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <MessageSquare size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 text-lg">No conversations yet. Send an enquiry to get started!</p>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
            <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={mockUser.name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={mockUser.email}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Location</label>
                  <input
                    type="text"
                    defaultValue={mockUser.location}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
