import { Outlet } from 'react-router-dom'
import Navigation from '@components/common/Navigation'
import Footer from '@components/common/Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
