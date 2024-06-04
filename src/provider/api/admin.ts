import { BaseApi } from '@/src/provider/api/baseApi';
import { apiClient } from '@/src/provider/client';

export interface AdminPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AdminData extends Omit<AdminPayload, 'password'> {
  id: string;
}

export class Admin extends BaseApi<AdminData['id'], AdminData, AdminPayload> {
  private currentBearer: string = '';

  public constructor() {
    super('admin');
  }

  public authenticate(token: string) {
    this.currentBearer = token;
  }

  async all(): Promise<AdminData[]> {
    return (
      await apiClient.get(this.resource_name, {
        headers: { Authorization: 'Bearer ' + this.currentBearer },
      })
    ).data;
  }
}
