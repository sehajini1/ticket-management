import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../@/components/ui/dialog"; // Adjust the import path
import { useUserContext } from "./contexts/UserContext";

export default function AllDetailsDialog({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { selectedUser } = useUserContext(); // Access the selected user

  if (!selectedUser) {
    return null; // Don't render the dialog if no user is selected
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>ID: {selectedUser._id}</p>
          <p>Name: {selectedUser.name}</p>
          <p>Address: {selectedUser.address}</p>
          <p>NIC: {selectedUser.nic}</p>
          <p>Gender: {selectedUser.gender}</p>
          <p>Career: {selectedUser.career}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Serial Number: {selectedUser.serialNumber}</p>
          <p>Document Link: {selectedUser.docLink}</p>
          <p>Contact Number: {selectedUser.contactNumber}</p>
          <p>Ticket Status: {selectedUser.ticketStatus}</p>
          <p>Nature of Business: {selectedUser.natureOfBusiness}</p>
          <p>Sheet Row Number: {selectedUser.sheetRowNumber}</p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}


