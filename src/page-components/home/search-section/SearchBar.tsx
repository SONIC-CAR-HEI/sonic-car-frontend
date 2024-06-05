'use client';
import {
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from '@mui/material';
import { SearchHookValue } from '@/src/hooks/useSearch';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

interface Props {
  hook: SearchHookValue;
}

export const SearchBar = ({ hook }: Props) => {
  return (
    <div className="flex gap-2 items-end z-10 px-5 py-3 bg-zinc-800 rounded-xl shadow-lg">
      <ThemeProvider theme={darkTheme}>
        <TextField
          placeholder="Search for vehicles"
          type="search"
          size="small"
          variant="standard"
          onChange={hook.handleQuery}
        />

        <TextField
          inputMode="decimal"
          label="Min price"
          size="small"
          variant="standard"
          sx={{ width: '10rem' }}
          onChange={hook.handleMinPrice}
        />

        <TextField
          inputMode="decimal"
          label="Max price"
          size="small"
          variant="standard"
          sx={{ width: '10rem' }}
          onChange={hook.handleMaxPrice}
        />

        <FormControl sx={{ minWidth: '6rem' }} size="small" variant="standard">
          <InputLabel id="select-motor">Motor</InputLabel>
          <Select
            label="Motor"
            labelId="select-motor"
            onChange={(v) => hook.handleMotorSelect(v.target.value as string)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={10}>Hybrid</MenuItem>
            <MenuItem value={11}>Electric</MenuItem>
            <MenuItem value={12}>Diesel</MenuItem>
            <MenuItem value={13}>Essence</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: '6rem' }} size="small" variant="standard">
          <InputLabel id="select-type">Type</InputLabel>
          <Select
            label="Type"
            labelId="select-type"
            onChange={(v) => hook.handleTypeSelect(v.target.value as string)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={10}>Suv</MenuItem>
            <MenuItem value={11}>4x4</MenuItem>
            <MenuItem value={12}>Bus</MenuItem>
            <MenuItem value={13}>Truck</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
};
