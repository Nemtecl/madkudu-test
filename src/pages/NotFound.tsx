import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

interface Props {}

const NotFound: React.FC<Props> = () => {
  const navigate = useNavigate();

  const redirect = () => navigate('/');
  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography>Canno't find this resource</Typography>
      <Button variant="contained" onClick={redirect}>
        Back to home
      </Button>
    </Grid>
  );
};

export default NotFound;
