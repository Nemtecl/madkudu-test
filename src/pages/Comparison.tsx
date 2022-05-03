import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material
import {
  CircularProgress,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  IconButton,
} from '@mui/material';
import { RemoveRedEye } from '@mui/icons-material';
// types
import { Antelope } from '@types';
// services
import { getAntelopes } from 'services';

interface Props {}

const Cell = ({ children }: { children?: React.ReactNode }) => (
  <Grid
    item
    xs={4}
    display="flex"
    alignItems="center"
    justifyContent="center"
    sx={{ mb: 2 }}
  >
    {children}
  </Grid>
);

const Antelopes: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Antelope[]>([]);
  const [selected, setSelected] = useState<[Antelope | null, Antelope | null]>([
    null,
    null,
  ]);

  const getData = async () => {
    setLoading(true);
    setData(await getAntelopes());
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const [first, second] = selected;

  const names = data.map(({ name }) => name);

  const handleChangeFirst = ({
    target: { value },
  }: SelectChangeEvent<string>) => {
    setSelected([data.find((o) => o.name === value) || null, second]);
  };

  const handleChangeSecond = ({
    target: { value },
  }: SelectChangeEvent<string>) => {
    setSelected([first, data.find((o) => o.name === value) || null]);
  };

  const redirect = (name: string) => navigate(`/antelopes/${name}`);

  if (loading) {
    return (
      <Grid display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100%' }}
      container
    >
      <Cell>
        <Select
          size="small"
          value={first?.name || ''}
          onChange={handleChangeFirst}
          input={<OutlinedInput label="Name" />}
          sx={{ width: '30%' }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </Cell>
      <Cell>
        <strong>VS</strong>
      </Cell>
      <Cell>
        <Select
          size="small"
          value={second?.name || ''}
          onChange={handleChangeSecond}
          input={<OutlinedInput label="Name" />}
          sx={{ width: '30%' }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </Cell>
      {first && second && (
        <>
          <Cell>{first.weight}</Cell>
          <Cell>
            <strong>Weight</strong>
          </Cell>
          <Cell>{second.weight}</Cell>
          <Cell>{first.height}</Cell>
          <Cell>
            <strong>Height</strong>
          </Cell>
          <Cell>{second.height}</Cell>
          <Cell>{first.horns}</Cell>
          <Cell>
            <strong>Horns</strong>
          </Cell>
          <Cell>{second.horns}</Cell>
          <Cell>{first.continent}</Cell>
          <Cell>
            <strong>Continent</strong>
          </Cell>
          <Cell>{second.continent}</Cell>
          <Cell>
            <IconButton onClick={() => redirect(first.name)}>
              <RemoveRedEye />
            </IconButton>
          </Cell>
          <Cell>
            <strong>Details</strong>
          </Cell>
          <Cell>
            <IconButton onClick={() => redirect(second.name)}>
              <RemoveRedEye />
            </IconButton>
          </Cell>
        </>
      )}
    </Grid>
  );
};

export default Antelopes;
