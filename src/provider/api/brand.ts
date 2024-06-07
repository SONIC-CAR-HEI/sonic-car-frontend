import { BaseApi } from '@/src/provider/api/baseApi';

export interface BrandCreatePayload {
  name: string;
  logoUrl: string | null;
}

export interface BrandData extends BrandCreatePayload {
  id: string;
}

export class Brand extends BaseApi<
  BrandData['id'],
  BrandData,
  BrandCreatePayload
> {
  constructor() {
    super('brand');
  }
}
