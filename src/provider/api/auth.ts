import { apiClient } from '@/src/provider/client';

export interface LoginPayload {
  email: string;
  password: string;
}

export const authenticate = async (data: LoginPayload): Promise<string> => {
  const response = await apiClient.post('/auth/login', data);
  return response.data.token;
};
