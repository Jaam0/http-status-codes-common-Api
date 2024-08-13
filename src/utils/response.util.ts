import { Response } from "express";

function successResponse(res: Response, isSuccess: boolean, content: any, statusCode: number, error?:any) {
    res.status(statusCode).send({
        isSuccess,
        content,
    });
};

function errorResponse(res: Response, isSuccess: boolean, content: any, statusCode: number, error: any) {
    res.status(statusCode).send({
        isSuccess,
        content,
        error
    });
};

export { successResponse, errorResponse };
