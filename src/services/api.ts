import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if available
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// API Endpoints
export const furnitureApi = {
  search: (query: string, filters?: any) =>
    apiClient.get('/furniture/search', { params: { q: query, ...filters } }),
  getById: (id: string) => apiClient.get(`/furniture/${id}`),
  getByCategory: (category: string) => apiClient.get(`/furniture/category/${category}`),
}

export const businessApi = {
  search: (query: string) => apiClient.get('/businesses/search', { params: { q: query } }),
  getById: (id: string) => apiClient.get(`/businesses/${id}`),
  getStorefront: (id: string) => apiClient.get(`/businesses/${id}/storefront`),
  getReviews: (id: string) => apiClient.get(`/businesses/${id}/reviews`),
}

export const enquiryApi = {
  create: (data: any) => apiClient.post('/enquiries', data),
  getById: (id: string) => apiClient.get(`/enquiries/${id}`),
  getByCustomer: () => apiClient.get('/enquiries/customer/me'),
  respond: (id: string, response: any) =>
    apiClient.post(`/enquiries/${id}/respond`, response),
}

export const authApi = {
  register: (data: any) => apiClient.post('/auth/register', data),
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  logout: () => apiClient.post('/auth/logout'),
  getProfile: () => apiClient.get('/auth/profile'),
}

export default apiClient
