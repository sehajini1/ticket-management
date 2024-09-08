// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface AuthContextType {
//     isAuthenticated: boolean;
//     setToken: (token: string) => void;
//     token: string | null;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [token, setToken] = useState<string | null>(null);
//   const isAuthenticated = !!token;
//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setToken, token }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
