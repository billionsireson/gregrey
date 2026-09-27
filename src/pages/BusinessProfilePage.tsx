import { useParams } from 'react-router-dom'

export default function BusinessProfilePage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="min-h-screen bg-accent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Business Profile</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Info */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="w-full h-48 bg-gray-300 rounded-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2">Business Name</h2>
              <p className="text-gray-600 mb-4">Business description goes here</p>
              <button className="btn-primary w-full">Send Enquiry</button>
            </div>
          </div>

          {/* Business Details */}
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <h3 className="text-xl font-semibold mb-4">Capabilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Custom Furniture', 'Delivery', 'Installation', 'Design Service'].map(cap => (
                  <div key={cap} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-gray-300 aspect-square rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
