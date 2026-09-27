import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">CONNECTING SPACES. CREATING POSSIBILITIES.</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Find the perfect furniture, match with the right business, and get it delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search" className="btn-primary">
              Start Discovering
            </Link>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Discovery Paths */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How GREGREY Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Discover', desc: 'Search, browse, or upload images' },
              { num: '2', title: 'Understand', desc: 'Describe what you need' },
              { num: '3', title: 'Match', desc: 'Find relevant businesses' },
              { num: '4', title: 'Connect', desc: 'Send enquiries & get quotes' },
            ].map(step => (
              <div key={step.num} className="card text-center">
                <div className="text-3xl font-bold text-primary mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your perfect furniture?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of customers discovering furniture the smart way.</p>
          <Link to="/search" className="btn-primary">
            Explore Furniture Now
          </Link>
        </div>
      </section>
    </div>
  )
}
