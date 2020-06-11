export interface Result<T> {
  title: string;
  success: boolean;
  message?: string;
  errorCode?: number;
  version?: string;
  data: T;
}
