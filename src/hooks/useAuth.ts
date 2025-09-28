import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('enfermidia_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulação de login - em produção, conectar com backend
    const mockUser: User = {
      id: '1',
      name: 'Usuário Teste',
      email,
      registrationNumber: 'COREN-123456',
      createdAt: new Date()
    };
    
    setUser(mockUser);
    localStorage.setItem('enfermidia_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const register = async (name: string, email: string, password: string, registrationNumber?: string) => {
    // Simulação de cadastro - em produção, conectar com backend
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      registrationNumber,
      createdAt: new Date()
    };
    
    setUser(newUser);
    localStorage.setItem('enfermidia_user', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('enfermidia_user');
  };

  return { user, loading, login, register, logout };
};