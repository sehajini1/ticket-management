import React, { createContext, useContext, useState } from "react";

interface User {
  _id: string;
  name: string;
  address: string;
  nic: string;
  gender: string;
  career: string;
  email: string;
  serialNumber: string;
  docLink: string;
  contactNumber: string;
  ticketStatus: string;
  natureOfBusiness: string;
  sheetRowNumber: number;
}

interface UserContextType {
  selectedUser: User | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
};