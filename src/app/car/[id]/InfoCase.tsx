import { BrandData } from '@/src/provider/api/brand';
import { Button, Chip } from '@mui/material';
import { CarData, CarImageData, CarTypeData } from '@/src/provider/api/car';
import { AppointmentModal } from '@/src/components/appointment-modal';

interface Props {
  data?: {
    carData: CarData;
    carImages: CarImageData[];
    brand: BrandData;
    type: CarTypeData;
  };
}

export const InfoCase = ({ data }: Props) => {
  return (
    <div className="w-1/2 p-5 h-full">
      <div className="flex flex-col gap-3 bg-zinc-900 text-white p-5 rounded-xl shadow-xl h-full">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">{data?.carData.name}</h2>
          <Chip
            size="small"
            label="Available"
            className="font-extrabold text-green-700"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">
            Model {data?.carData.model} ({data?.type.name})
          </p>
          <div className="flex items-center gap-2">
            <img
              alt=""
              className="w-[3rem] h-[3rem] object-cover"
              src={data?.brand.logoUrl as string}
            />
            <span className="text-lg font-semibold">{data?.brand.name}</span>
          </div>
          <p className="text-lg">With motor {data?.carData.engineType}</p>
          <p className="text-lg">And a power of {data?.carData.power}</p>
          <p className="text-lg">It has {data?.carData.placeNumber} seats</p>
          <p className="text-lg">{data?.carData?.description}</p>
        </div>
        <div className="flex items-center justify-center px-3 pt-4">
          <AppointmentModal carId={data?.carData?.id as string}>
            <Button variant="contained">
              Buy now for {data?.carData?.price || 0} Ar
            </Button>
          </AppointmentModal>
        </div>
      </div>
    </div>
  );
};
