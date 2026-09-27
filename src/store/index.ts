import { create } from 'zustand'
import type { Customer, Business, Furniture, Enquiry } from '@types/index'

interface AppState {
  // Auth
  currentUser: Customer | null
  setCurrentUser: (user: Customer | null) => void

  // Saved Items
  savedFurniture: Furniture[]
  savedBusinesses: Business[]
  saveFurniture: (furniture: Furniture) => void
  removeSavedFurniture: (id: string) => void
  saveBusiness: (business: Business) => void
  removeSavedBusiness: (id: string) => void

  // Enquiries
  enquiries: Enquiry[]
  addEnquiry: (enquiry: Enquiry) => void
  updateEnquiry: (id: string, updates: Partial<Enquiry>) => void
}

export const useStore = create<AppState>(set => ({
  currentUser: null,
  setCurrentUser: (user: Customer | null) => set({ currentUser: user }),

  savedFurniture: [],
  savedBusinesses: [],
  enquiries: [],

  saveFurniture: (furniture: Furniture) =>
    set(state => ({
      savedFurniture: [...state.savedFurniture, furniture],
    })),
  removeSavedFurniture: (id: string) =>
    set(state => ({
      savedFurniture: state.savedFurniture.filter(f => f.id !== id),
    })),
  saveBusiness: (business: Business) =>
    set(state => ({
      savedBusinesses: [...state.savedBusinesses, business],
    })),
  removeSavedBusiness: (id: string) =>
    set(state => ({
      savedBusinesses: state.savedBusinesses.filter(b => b.id !== id),
    })),
  addEnquiry: (enquiry: Enquiry) =>
    set(state => ({
      enquiries: [...state.enquiries, enquiry],
    })),
  updateEnquiry: (id: string, updates: Partial<Enquiry>) =>
    set(state => ({
      enquiries: state.enquiries.map(e => (e.id === id ? { ...e, ...updates } : e)),
    })),
}))
