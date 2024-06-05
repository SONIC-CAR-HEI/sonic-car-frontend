import { useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';

export function UserInfo() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <CircularProgress
        size={40}
        style={{ margin: '7px' }}
        sx={{
          '.MuiCircularProgress-circle': {
            color: 'yellow',
          },
        }}
      />
    );
  }
}
