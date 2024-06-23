'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default DashboardPage;