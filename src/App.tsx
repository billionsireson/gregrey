import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import HomePage from '@pages/HomePage'
import SearchPage from '@pages/SearchPage'
import BusinessProfilePage from '@pages/BusinessProfilePage'
import CustomerAccountPage from '@pages/CustomerAccountPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/business/:id" element={<BusinessProfilePage />} />
          <Route path="/account" element={<CustomerAccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
