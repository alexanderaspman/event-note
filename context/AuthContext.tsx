"use client"
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

// Define the shape of our context
interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  data: any; // Adjust the type according to your data structure
  fetchData: () => void;
}

// Create the context with an initial value
export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  data: null,
  fetchData: () => {},
});

// Define the props for the provider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);
 
  const fetchData = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:3003/api/update', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking local storage or cookies)
   
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
      fetchData
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, data, fetchData }}>
      {children}
    </AuthContext.Provider>
  );
};