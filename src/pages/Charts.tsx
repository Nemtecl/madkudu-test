import React, { useEffect, useState } from 'react';
// material
import { Grid, CircularProgress, Typography } from '@mui/material';
import Chart from 'react-google-charts';
// types
import { Antelope } from '@types';
// services
import { groupBy, toGeoData, toScatterData, getAntelopes } from 'services';

interface Props {}

const Antelopes: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Antelope[]>([]);

  const getData = async () => {
    setLoading(true);
    setData(await getAntelopes());
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <Grid display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid display="flex" justifyContent="center" alignItems="center" container>
      <Grid item xs={6} display="flex" flexDirection="column">
        <Typography textAlign="center" variant="h6">
          Antelopes popularity by continent
        </Typography>
        <Chart
          style={{ padding: '10px' }}
          chartType="GeoChart"
          data={toGeoData(data)}
          options={{
            resolution: 'continents',
            colorAxis: { colors: ['#b3dbfb', '#2196f3'] },
          }}
        />
      </Grid>
      <Grid
        item
        xs={5}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Grid display="flex" flexDirection="column">
          <Typography textAlign="center" variant="h6">
            Antelopes percentage popularity by continent
          </Typography>
          <Chart chartType="PieChart" data={groupBy(data, 'continent')} />
        </Grid>
        <Grid display="flex" flexDirection="column">
          <Typography textAlign="center" variant="h6">
            Antelopes percentage by horns
          </Typography>
          <Chart chartType="PieChart" data={groupBy(data, 'horns')} />
        </Grid>
      </Grid>
      <Grid item xs={10} flexDirection="column" justifyContent="center">
        <Typography textAlign="center" variant="h6">
          Antelopes popularity by weight
        </Typography>
        <Chart chartType="ScatterChart" data={toScatterData(data)} />
      </Grid>
    </Grid>
  );
};

export default Antelopes;
