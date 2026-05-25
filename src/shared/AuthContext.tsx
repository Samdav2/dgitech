import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Role = 'Admin' | 'TusoTeacher' | 'Teacher' | 'Learner' | 'Parent' | null

export type User = {
  id: string
  email: string
  role: Role
  subscription?: {
    status: 'active' | 'expired' | 'none'
    start?: string
    expiry?: string
    assessmentsAddOn?: 'active' | 'expired' | 'none'
  }
}

type AuthContextType = {
  user: User | null
  login: (email: string, role: Role) => void
  logout: () => void
  updateSubscription: (sub: Partial<User['subscription']>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, role: Role) => {
    // Mock user creation — in real app, replace with API
    const now = new Date()
    const expiry = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
    setUser({
      id: 'u_' + Math.random().toString(36).slice(2, 9),
      email,
      role,
      subscription: {
        status: 'active',
        start: now.toISOString(),
        expiry: expiry.toISOString(),
        assessmentsAddOn: 'none'
      }
    })
  }

  const logout = () => setUser(null)

  const updateSubscription = (sub: Partial<User['subscription']>) => {
    setUser((u) => (u ? { ...u, subscription: { ...u.subscription, ...sub } as User['subscription'] } : u))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateSubscription }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
