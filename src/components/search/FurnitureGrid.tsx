export default function FurnitureGrid() {
  const furniture = [
    { id: 1, name: 'Modern Sofa', price: '₦850,000', image: '' },
    { id: 2, name: 'Wooden Dining Set', price: '₦1,200,000', image: '' },
    { id: 3, name: 'Office Chair', price: '₦350,000', image: '' },
    { id: 4, name: 'Bed Frame', price: '₦750,000', image: '' },
    { id: 5, name: 'Coffee Table', price: '₦280,000', image: '' },
    { id: 6, name: 'Bookshelf', price: '₦420,000', image: '' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {furniture.map(item => (
          <div key={item.id} className="card hover:shadow-lg transition cursor-pointer">
            <div className="bg-gray-300 aspect-video rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.price}</p>
            <button className="btn-secondary w-full text-sm">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}
