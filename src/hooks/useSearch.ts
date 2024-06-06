import { apiProvider } from '@/src/provider/api-provider';
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { BrandData } from '@/src/provider/api/brand';
import { CarData } from '@/src/provider/api/car';

export interface SearchHookValue {
  handleQuery: ChangeEventHandler<HTMLInputElement>;
  handleMinPrice: ChangeEventHandler<HTMLInputElement>;
  handleMaxPrice: ChangeEventHandler<HTMLInputElement>;
  handleSelectBrand(value: BrandData): void;
  handleMotorSelect(value: string): void;
  handleTypeSelect(value: string): void;

  reset(data?: CarData[]): void;
  result: CarData[];
}

interface Params {
  query: string;
  minPrice: number;
  maxPrice: number;
  motor: string;
  type: string;
  brand: string;
}

export const useSearch = (initialData?: CarData[]): SearchHookValue => {
  const [, setQuery] = useState<Params>({} as Params);
  const [result, setResult] = useState(initialData || []);
  useEffect(() => {
    if (initialData && initialData?.length > 0) {
      setResult(initialData);
    }
  }, [initialData]);

  const performSearch = (params: Partial<Params>) => {
    apiProvider.car.search(params).then((v) => setResult(v));
  };

  const lookup = <T extends keyof Params>(
    key: T,
    value: Params[T],
    removeBrand = true,
  ) => {
    setQuery((p) => {
      let obj: Params = { ...p };
      if (removeBrand) {
        const { brand, ...r } = obj;
        obj = r as Params;
      }
      obj[key] = value;
      performSearch(obj);
      return obj;
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query: string = e.target.value;
    lookup('query', query);
  };

  const debounced = useDebouncedCallback(handleChange, 800);
  useEffect(() => () => debounced.flush(), [debounced]);

  return {
    handleQuery: debounced,
    result,
    handleMaxPrice(e) {
      const value = parseFloat(e.target.value);
      if (!Number.isNaN(value)) {
        lookup('minPrice', value);
      }
    },
    handleMinPrice(e) {
      const value = parseFloat(e.target.value);
      if (!Number.isNaN(value)) {
        lookup('minPrice', value);
      }
    },
    handleTypeSelect(value: string) {
      lookup('type', value);
    },
    handleMotorSelect(value: string) {
      lookup('motor', value);
    },
    handleSelectBrand(value: BrandData) {
      lookup('brand', value.id, false);
    },
    reset(data?: CarData[]) {
      setQuery({} as Params);
      setResult(data || []);
    },
  };
};
