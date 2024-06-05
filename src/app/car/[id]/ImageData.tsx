import { useState } from 'react';

export const ImageData = () => {
  const [images, setImages] = useState(['1', '2', '3', '4']);

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
        <img src={images[0]} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex items-center gap-3">
        {images.slice(1).map((src, i) => (
          <div
            key={i}
            onClick={swapOnClick(i + 1)}
            className="w-full aspect-video bg-zinc-400 rounded-lg overflow-hidden transition-transform hover:scale-[1.04]"
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
