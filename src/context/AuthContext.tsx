'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { SessionProvider, useSession, signOut } from 'next-auth/react';

export interface AuthUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  logout: () => Promise<void>;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function AuthState({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const user: AuthUser | null = session?.user
    ? {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      }
    : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: status === 'loading',
        logout: () => signOut(),
        isLoginModalOpen,
        openLoginModal: () => setIsLoginModalOpen(true),
        closeLoginModal: () => setIsLoginModalOpen(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthState>{children}</AuthState>
    </SessionProvider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
