import { Box, styled, ThemeProvider, useMediaQuery } from '@mui/material';
import { SoAppBar } from './navBar';
import StudentMenu from './menu/AdminMenu';

const LayoutStyled = styled('div')({
  minHeight: '100vh',
  position: 'relative',
  backgroundColor: '',
  width: '100%',
});

export function SoLayout({ children }: { children: React.ReactNode }) {
  const isSmall = useMediaQuery('(max-width:900px)');

  return (
    <LayoutStyled>
      <SoAppBar />
      <StudentMenu />
      <Box
        sx={{
          ml: isSmall ? 0 : '250px',
          width: isSmall ? '100%' : 'calc(100% - 250px)',
          boxSizing: 'border-box',
          transition: 'all .3s linear',
          px: 1,
          position: 'relative',
        }}
        component="div"
        id="main-content"
      >
        {children}
      </Box>
    </LayoutStyled>
  );
}
