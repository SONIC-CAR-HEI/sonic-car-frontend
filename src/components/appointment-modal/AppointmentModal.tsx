import { PropsWithChildren, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
} from '@mui/material';
import { Form } from './Form';

export const AppointmentModal = ({
  children,
  carId,
}: PropsWithChildren<{ carId: string }>) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle className="font-bold">
          In order to buy, fix an appointment
        </DialogTitle>
        <DialogContent>
          <p>* After sending this form, we will send back an email</p>
          <Form carId={carId} onSent={() => setOpen(false)}>
            <DialogActions>
              <Button variant="outlined" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Confirm
              </Button>
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
