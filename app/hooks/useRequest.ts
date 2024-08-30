import {token} from '@utils/constant';
import {CommonErrors, Constants} from '@utils/constant';
import {
  type ApiResponse,
  type FetchConfig,
} from '@utils/interfaces/common.interface';
import axios, {AxiosError} from 'axios';
import {useState} from 'react';

const useRequest = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const authHeader = {Authorization: `${token}`};

  const api = axios.create({
    baseURL: `${Constants.API_URL}/${Constants.API_VERSION}/`,
    headers: authHeader,
    withCredentials: true,
  });

  api.interceptors.request.use(
    config => {
      setLoading(true);
      setError(null);
      // if authorization is not added & token is available then add it into API call request.
      config.headers.Authorization = `${token}`;
      return config;
    },
    async interceptorError => {
      setLoading(false);
      setError(CommonErrors.REQUEST_ERROR);
      return await Promise.reject(interceptorError);
    },
  );

  api.interceptors.response.use(
    response => {
      setLoading(false);
      return response;
    },
    async interceptorError => {
      setLoading(false);
      if (axios.isAxiosError(interceptorError)) {
        if (interceptorError.code === 'ECONNABORTED') {
          setError(CommonErrors.REQUEST_TIMEOUT);
        } else if (interceptorError.response?.status === 401) {
          setError(CommonErrors.AUTH_FAILED);
        } else {
          setError(CommonErrors.RESPONSE_ERROR);
        }
      }

      if (interceptorError.response) {
        return await Promise.reject(interceptorError.response);
      }

      return await Promise.reject(interceptorError);
    },
  );

  const fetchData = async <T>({
    url,
    method = 'GET',
    data,
    config,
  }: FetchConfig): Promise<ApiResponse<T>> => {
    try {
      setLoading(true);
      const response = await api.request({
        method,
        url,
        data,
        ...config,
      });
      const responseData = {
        message: response.data.message,
        code: response.status,
        success: response.data.success,
      };

      if (response.status === 201 || response.status === 200) {
        setLoading(false);
        return await Promise.resolve({
          data: response.data,
          ...responseData,
        });
      } else if (response.status === 401) {
        return await Promise.resolve({
          data: response.data,
          ...responseData,
        });
      } else {
        setLoading(false);
        setError(response.statusText);
        return await Promise.reject({
          data: null,
          ...responseData,
        });
      }
    } catch (interceptorError) {
      setLoading(false);
      return await Promise.reject({
        data: null,
        message:
          interceptorError instanceof AxiosError
            ? interceptorError.response?.data?.message ??
              CommonErrors.REQUEST_TIMEOUT
            : CommonErrors.REQUEST_TIMEOUT,
        code:
          interceptorError instanceof AxiosError
            ? interceptorError.status ?? 0
            : 0,
        success: false,
      });
    }
  };

  return {loading, error, request: fetchData};
};

export default useRequest;
