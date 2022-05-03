import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material
import { Grid } from '@mui/material';
import { DataGrid, GridColumns, GridRowParams } from '@mui/x-data-grid';
// types
import { Antelope } from '@types';
// services
import { getAntelopes } from 'services';

interface Props {}

const columns: GridColumns<Antelope> = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'continent',
    headerName: 'Continent',
    flex: 1,
  },
  {
    field: 'horns',
    headerName: 'Horns',
    flex: 1,
  },
  {
    field: 'weight',
    headerName: 'Weight',
    flex: 1,
  },
  {
    field: 'height',
    headerName: 'Height',
    flex: 1,
  },
];

const Antelopes: React.FC<Props> = () => {
  const navigate = useNavigate();
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

  const handleRedirect = ({ id }: GridRowParams<Antelope>) =>
    navigate(`/antelopes/${id}`);

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100%' }}
    >
      <DataGrid
        columns={columns}
        rows={data}
        loading={loading}
        autoPageSize
        onRowClick={handleRedirect}
        getRowId={(row: Antelope) => row.name}
        sx={{
          height: '650px',
        }}
      />
    </Grid>
  );
};

export default Antelopes;
