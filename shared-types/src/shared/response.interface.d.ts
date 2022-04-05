export interface IResponse<T = unknown> {
    status: number;
    _meta: {};
    data: T;
}
