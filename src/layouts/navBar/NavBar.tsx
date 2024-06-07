import { useMediaQuery, AppBar, Box, Typography } from '@mui/material';
import { UserInfo } from './UserInfo';
import { SidebarToggleButton } from 'react-admin';

const APPBAR_STYLE = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  color: 'black',
  height: '60px',
  py: 1,
  px: 2,
  backgroundColor: 'white',
  boxShadow: '5px 5px 5px gray',
};

export const SoAppBar = () => {
  const isSmall = useMediaQuery('(max-width:900px)');

  return (
    <AppBar id="appbar" position="sticky" sx={APPBAR_STYLE}>
      {isSmall ? (
        <SidebarToggleButton />
      ) : (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: '85rem',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h2
            id="react-admin-title"
            style={{
              fontSize: '16px',
              padding: 0,
              margin: 0,
              fontWeight: '600',
              color: 'blue',
            }}
          >
            SONIC CAR
          </h2>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '5rem',
            textDecoration: 'underline',
          }}
        >
          {!isSmall && (
            <Typography sx={{ color: 'green' }}>
              WELCOME TO OUR CAR <br />
              <span
                style={{ color: 'blueviolet', textDecoration: 'underline' }}
              >
                {' '}
                SITE
              </span>
            </Typography>
          )}
        </Box>
      </Box>
      <img alt="hei" src={'menuLogo'} style={{ width: 40, height: 27 }} />
      <UserInfo />
    </AppBar>
  );
};

export default SoAppBar;
