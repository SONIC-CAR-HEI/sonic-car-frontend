import axios from 'axios';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();

const API_URL: string = process.env['API_URL'] as string;

export const apiClient = axios.create({
  baseURL: API_URL,
});
