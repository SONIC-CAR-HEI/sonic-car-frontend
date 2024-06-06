import { apiProvider } from '@/src/provider/api-provider';
import { useState } from 'react';
import { useQuery } from 'react-query';

interface Props {
  id: string;
}

export const ImageData = ({ id }: Props) => {
  const { data } = useQuery({
    queryKey: ['get-car-images', id],
    queryFn: () =>
      apiProvider.carImage.getCarImagesUrl(id).then((v) => v.slice(0, 3)),
  });
  const [images, setImages] = useState(data || []);

  const swapOnClick = (index: number) => {
    return () => {
      setImages((p) => {
        const copyImage = p.slice();
        copyImage[index] = p[0];
        copyImage[0] = p[index];
        return copyImage;
      });
    };
  };

  return (
    <div className="w-full p-3 flex flex-col gap-3">
      <div className="w-full aspect-video bg-zinc-800 rounded-xl overflow-hidden">
        <img
          src={images[0]?.imageUrl}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex items-center gap-3">
        {images.slice(1).map((src, i) => (
          <div
            key={i}
            onClick={swapOnClick(i + 1)}
            className="w-full aspect-video bg-zinc-400 rounded-lg overflow-hidden transition-transform hover:scale-[1.04]"
          >
            <img
              src={src.imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
