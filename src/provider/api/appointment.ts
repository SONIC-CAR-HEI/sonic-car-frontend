import { BaseApi } from '@/src/provider/api/baseApi';
import { apiClient } from '@/src/provider/client';

export type AppointmentStatus =
  | 'PENDING'
  | 'ARCHIVED'
  | 'REJECTED'
  | 'ACCEPTED';

export interface AppointmentData {
  id: string;
  status: AppointmentStatus;
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  tel: string;
  date: Date;
  carId: string;
  adminId: string;
}

export type AppointmentCreatePayload = Omit<
  AppointmentData,
  'adminId' | 'id' | 'status'
>;

export class Appointment extends BaseApi<
  AppointmentData['id'],
  AppointmentData,
  AppointmentCreatePayload
> {
  constructor() {
    super('appointment');
  }

  async updateStatus(
    id: AppointmentData['id'],
    status: AppointmentStatus,
  ): Promise<AppointmentData> {
    return (await apiClient.post(this.resource_name + id + '?status=' + status))
      .data;
  }
}
