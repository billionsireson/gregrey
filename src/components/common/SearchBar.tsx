import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for furniture, styles, or materials..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="input-field flex-1"
        />
        <button type="submit" className="btn-primary whitespace-nowrap">
          Search
        </button>
      </div>
    </form>
  )
}
