'use client';
import './globals.css';
import { PropsWithChildren } from 'react';
import { queryClient } from '@/src/provider/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { QueryClientProvider } from 'react-query';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {children}
          </LocalizationProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
