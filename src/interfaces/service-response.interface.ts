import { ServiceError } from './error-messages.interface';

export interface ServiceResponse<T> {
    isSuccess: boolean;
    content: T;
    error?: ServiceError;
}