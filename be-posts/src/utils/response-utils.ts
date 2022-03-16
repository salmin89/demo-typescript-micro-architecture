import { IResponse } from 'shared-types/src/shared/response.interface';
export function respond<T = unknown>(data: T): IResponse<T> {
  return {
    status: 200,
    _meta: {},
    data,
  };
}
