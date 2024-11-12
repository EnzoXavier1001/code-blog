import axios, { AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = async <T>(method: string, url: string, data?: any): Promise<AxiosResponse<T>> => {
  const response = await axios({ method, url, data });
  return response;
};
