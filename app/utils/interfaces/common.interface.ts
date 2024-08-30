import {type AxiosRequestConfig} from 'axios';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  code: number;
  data: T;
}

export interface FetchConfig {
  url: string;
  method?: HttpMethod;
  data?: any;
  config?: AxiosRequestConfig;
}
