import { cookies } from 'next/headers';

const DashboardPage = () => {
  // Access the cookies
  const allCookies = cookies();
  const token = allCookies.get('token');

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Token: {token ? token.value : 'No token found'}</p>
    </div>
  );
};

export default DashboardPage;