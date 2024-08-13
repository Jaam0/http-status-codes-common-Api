import { Request, Response } from "express";
import HttpStatusCodeCommonService from "../services/http-status-codes-common.service";
import Logger from '../common/logger/logger.service';
import { successResponse, errorResponse } from "../utils/response.util";
import { ServiceResponse } from "../interfaces/service-response.interface";

class HttpStatusCodesCommonController {
    private readonly serviceName = 'Controller:HttpStatusCodesCommonController';
    private logger = Logger;
    private httpStatusCodeCommonService = HttpStatusCodeCommonService;
    constructor() { }

    async showAllStatusCodes(req: Request, res: Response) {
        let data:any;
        try {
            data = await HttpStatusCodeCommonService.showAllStatusCodes();
            return successResponse(res, data.isSuccess, data.content, 200);
        } catch (error: any) {
            return errorResponse(res, false, [], 500, `${data.error.friendlyMessage}`);
        }
    }
}
export default new HttpStatusCodesCommonController();
