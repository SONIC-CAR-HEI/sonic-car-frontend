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

  const performSearch = (params: Partial<Params>) => {
    setResult([]);
  };

  const lookup = <T extends keyof Params>(key: T, value: Params[T]) => {
    setQuery((p) => {
      const obj: Params = { ...p };
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
      lookup('maxPrice', e.target.valueAsNumber);
    },
    handleMinPrice(e) {
      lookup('minPrice', e.target.valueAsNumber);
    },
    handleTypeSelect(value: string) {
      lookup('type', value);
    },
    handleMotorSelect(value: string) {
      lookup('motor', value);
    },
    handleSelectBrand(value: BrandData) {
      lookup('brand', value.id);
    },
    reset(data?: CarData[]) {
      setQuery({} as Params);
      setResult(data || []);
    },
  };
};
