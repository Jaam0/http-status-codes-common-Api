interface ServiceError {
    code: string;
    friendlyMessage: string;
    internalMessage: string;
    source: string;
}

interface ErrorMessages {
    "INTERNAL_SERVER_ERROR": ServiceError;
}

export { ErrorMessages, ServiceError };