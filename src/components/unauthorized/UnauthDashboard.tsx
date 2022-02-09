import { Typography } from '@mui/material';
import * as React from 'react';

interface UnauthDashboardProps {}

const UnauthDashboard: React.FC<UnauthDashboardProps> = () => {
  return (
    <Typography variant='h1' component='h2'>
      h1. Heading
    </Typography>
  );
};

export default UnauthDashboard;
