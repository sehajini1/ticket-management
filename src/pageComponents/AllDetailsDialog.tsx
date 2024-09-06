import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../@/components/ui/dialog"; 
import { useUserContext } from "./contexts/UserContext";

export default function AllDetailsDialog({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { selectedUser } = useUserContext(); 

  if (!selectedUser) {
    return null; 
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div style={{ marginBottom: '1.5rem' }}>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>
            <p><strong>NIC:</strong> {selectedUser.nic}</p>
            <p><strong>Gender:</strong> {selectedUser.gender}</p>
            <p><strong>Career:</strong> {selectedUser.career}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Contact Number:</strong> {selectedUser.contactNumber}</p>
            <p><strong>Ticket Status:</strong> {selectedUser.ticketStatus}</p>
            <p><strong>Nature of Business:</strong> {selectedUser.natureOfBusiness}</p>
          </div>

          {/* Displaying the document link using an iframe */}
          {selectedUser.docLink ? (
            <div>
              <p><strong>Document:</strong></p>
              <iframe
                src={selectedUser.docLink}
                title="Document"
                style={{ width: '100%', height: '35vh', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
          ) : (
            <p>No document available.</p>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}


