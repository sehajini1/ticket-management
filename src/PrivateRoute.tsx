// // components/PrivateRoute.tsx
// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from 'pageComponents/contexts/AuthContext';

// const PrivateRoute: React.FC = () => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
