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
          {selectedUser.name && <p><strong>Name:</strong> {selectedUser.name}</p>}
            {selectedUser.address && <p><strong>Address:</strong> {selectedUser.address}</p>}
            {selectedUser.nic && <p><strong>NIC:</strong> {selectedUser.nic}</p>}
            {selectedUser.gender && <p><strong>Gender:</strong> {selectedUser.gender}</p>}
            {selectedUser.career && <p><strong>Career:</strong> {selectedUser.career}</p>}
            {selectedUser.email && <p><strong>Email:</strong> {selectedUser.email}</p>}
            {selectedUser.contactNumber && <p><strong>Contact Number:</strong> {selectedUser.contactNumber}</p>}
            {selectedUser.ticketStatus && <p><strong>Ticket Status:</strong> {selectedUser.ticketStatus}</p>}
            {selectedUser.natureOfBusiness && <p><strong>Nature of Business:</strong> {selectedUser.natureOfBusiness}</p>}
          </div>

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


