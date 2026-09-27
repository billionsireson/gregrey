// User Types
export interface Customer {
  id: string
  email: string
  name: string
  phone?: string
  location?: string
  savedFurniture: string[]
  savedBusinesses: string[]
}

export interface Business {
  id: string
  name: string
  description: string
  location: string
  serviceAreas: string[]
  verificationStatus: 'registered' | 'verified' | 'trusted' | 'preferred'
  capabilities: string[]
  responseRate: number
  averageResponseTime: number
}

// Furniture Types
export interface Furniture {
  id: string
  businessId: string
  name: string
  description: string
  category: string
  style: string
  price: number | { min: number; max: number }
  availability: 'ready' | 'limited' | 'made-to-order' | 'custom' | 'preorder'
  images: string[]
  materials?: string[]
  dimensions?: { width: number; height: number; depth: number }
}

// Enquiry Types
export interface Enquiry {
  id: string
  customerId: string
  businessId: string
  furnitureId?: string
  description: string
  budget?: number
  location: string
  quantity: number
  deliveryRequired: boolean
  customizationOpen: boolean
  status: 'pending' | 'responded' | 'quoted' | 'closed'
  createdAt: Date
}

export interface EnquiryResponse {
  id: string
  enquiryId: string
  businessId: string
  options?: Array<{
    name: string
    price: number
    availability: string
    description: string
  }>
  message: string
  createdAt: Date
}

// Review Types
export interface Review {
  id: string
  businessId: string
  customerId: string
  rating: number
  title: string
  content: string
  verified: boolean
  createdAt: Date
}
