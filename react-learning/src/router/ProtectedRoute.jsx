import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.amazonInfo.isAuthenticated);

  // if (loading) return <div>Loading...</div>;
  console.log('router isAuthenticated', isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;