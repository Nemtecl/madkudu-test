import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Chart from 'react-google-charts';
// material
import { CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
// types
import { Antelope } from '@types';
// services
import { getAntelope } from 'services';
// utils
import { getContinentCode } from 'utils/continent';

interface Props {}

const AntelopePage: React.FC<Props> = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [current, setCurrent] = useState<Antelope | null>();

  useEffect(() => {
    const get = async () => {
      try {
        setCurrent(await getAntelope(name || ''));
      } finally {
        setLoading(false);
      }
    };
    get();
  }, [name]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!current) {
    navigate('/404');
    return <></>;
  }

  const { height, weight, horns, picture, continent } = current;

  const geoData = [
    ['Region Code', 'Continent', 'Popularity'],
    [getContinentCode(continent), continent, 1],
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2">{name}</Typography>
      </Box>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={6}>
          <img
            src={picture}
            alt={name}
            style={{
              maxWidth: '700px',
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <strong>Horns:</strong> {horns}
          </Typography>
          <Typography>
            <strong>Height:</strong> {height}
          </Typography>
          <Typography>
            <strong>Weight:</strong> {weight}
          </Typography>

          <Box>
            <Chart
              chartType="GeoChart"
              width="100%"
              data={geoData}
              options={{
                resolution: 'continents',
                colorAxis: { colors: ['#2196f3'] },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AntelopePage;
