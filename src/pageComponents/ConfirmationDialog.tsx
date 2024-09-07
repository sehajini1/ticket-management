import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../@/components/ui/dialog'; // Ensure import path is correct
import { Button } from '../@/components/ui/button';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  action: 'approved' | 'rejected' ; 
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ isOpen, onClose, onConfirm, action }) => {
  const actionText = action === 'approved' ? 'approve' : 'reject' ;
  const confirmButtonColor = action === 'approved' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600';
  const actionHeaderText = action === 'approved' ? 'Approve' : 'Reject' ;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{actionHeaderText} Confirmation</DialogTitle>
          <DialogDescription>
            Are you sure you want to {actionText} this user? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
          className={`text-white ${confirmButtonColor}`} 
          onClick={onConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
