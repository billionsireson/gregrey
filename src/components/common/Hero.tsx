import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-gray-900 text-secondary py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            CONNECTING SPACES.<br />CREATING POSSIBILITIES.
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Find the perfect furniture, match with trusted businesses, and get it delivered. All in one place.
          </p>
        </div>

        <div className="mb-12">
          <SearchBar />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/search"
            className="btn-primary bg-secondary text-primary hover:bg-accent"
          >
            Explore Furniture
          </Link>
          <button className="px-6 py-2 border-2 border-secondary text-secondary rounded-lg font-medium hover:bg-secondary hover:text-primary transition">
            Request Furniture
          </button>
        </div>
      </div>
    </section>
  )
}
