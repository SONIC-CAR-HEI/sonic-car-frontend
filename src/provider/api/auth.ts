import { apiClient } from '@/src/provider/client';

export const authenticate = async (token: string): Promise<string> => {
  const response = await apiClient.post(
    '/auth/login',
    {},
    {
      headers: { Authorization: 'Bearer ' + token },
    },
  );
  return response.data.token;
};
