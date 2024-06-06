import { apiProvider } from '@/src/provider/api-provider';
import { MenuItem } from '@mui/material';
import { useQuery } from 'react-query';

export const CarTypeOptions = () => {
  const { data } = useQuery({
    queryKey: ['get-car-types'],
    queryFn: () => apiProvider.carType.all(),
  });

  return (
    <>
      <MenuItem value="">None</MenuItem>
      {data?.map((v) => (
        <MenuItem value={v.id} key={v.id}>
          {v.name}
        </MenuItem>
      ))}
    </>
  );
};
