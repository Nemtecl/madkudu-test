import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router';

interface Props {
  children?: React.ReactNode;
}

const appBarHeight = '64px';

const Wrapper = styled('main')(() => ({
  padding: '20px 50px',
  height: `calc(100vh - ${appBarHeight})`,
}));

const pages = [
  { name: 'Table', path: '/antelopes' },
  { name: 'Charts', path: '/charts' },
  { name: 'Comparison', path: '/comparison' },
];

const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const redirect = (path: string | undefined = '/') => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="sticky" sx={{ height: appBarHeight }}>
        <Toolbar onClick={() => redirect()}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: 'flex' }}
          >
            MadKudu test
          </Typography>
          <Box sx={{ mx: 2, display: 'flex' }}>
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                onClick={(e) => {
                  e.stopPropagation();
                  redirect(path);
                }}
                variant={path === pathname ? 'contained' : 'outlined'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Wrapper>
        <Box sx={{ width: '100%' }}>{children}</Box>
      </Wrapper>
    </Box>
  );
};

export default Layout;
