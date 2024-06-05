import { apiClient } from '@/src/provider/client';

export const contact = async <T>(data: T) => {
  return (await apiClient.post('/contact', data)).data;
};
