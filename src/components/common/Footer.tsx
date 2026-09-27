export default function Footer() {
  return (
    <footer className="bg-primary text-secondary border-t border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">GREGREY</h3>
            <p className="text-sm opacity-75">Connecting spaces. Creating possibilities.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">Search</a></li>
              <li><a href="#" className="hover:opacity-100">Browse</a></li>
              <li><a href="#" className="hover:opacity-100">Request Furniture</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">Register</a></li>
              <li><a href="#" className="hover:opacity-100">Storefront</a></li>
              <li><a href="#" className="hover:opacity-100">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">About</a></li>
              <li><a href="#" className="hover:opacity-100">Contact</a></li>
              <li><a href="#" className="hover:opacity-100">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-accent mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 GREGREY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
