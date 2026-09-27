import { useState } from 'react'

export default function CustomerAccountPage() {
  const [activeTab, setActiveTab] = useState('saved')

  const tabs = [
    { id: 'saved', label: 'Saved Items' },
    { id: 'enquiries', label: 'Enquiries' },
    { id: 'conversations', label: 'Conversations' },
    { id: 'profile', label: 'Profile' },
  ]

  return (
    <div className="min-h-screen bg-accent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="card">
              <div className="bg-gray-300 aspect-video rounded-lg mb-4" />
              <h3 className="font-semibold">Item {i}</h3>
              <p className="text-sm text-gray-600">Furniture description</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
