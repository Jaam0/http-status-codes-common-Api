import Logger from '../common/logger/logger.service';
import { HttpStatusCodesCommonClass } from '../models/class/http-status-codes-common.class';
import StatusCodesJson from '../common/database/json/http-status-codes-common.json';
import { ServiceResponse } from '../interfaces/service-response.interface';
import { ErrorMessagesCode } from '../enums/error-messages-code.enum';

class HttpStatusCodesCommonService {
    private readonly serviceName = 'Service:HttpStatusCodesCommonService';
    private logger = Logger;
    constructor() { }

    async showAllStatusCodes(): Promise<ServiceResponse<HttpStatusCodesCommonClass[]>> {
        const method = `${this.serviceName} Method:showAllStatusCodes`;
        try {
            this.logger.log(`${method} starting to show all status codes from json file`);
            const data = StatusCodesJson;
            const hasData = data.length > 0 || data !== null;
            if (!hasData) {
                this.logger.warn(`${method} no data found on json file`);
                return {
                    isSuccess: false,
                    content: [],
                    error: {
                        code: ErrorMessagesCode.INTERNAL_SERVER_ERROR,
                        friendlyMessage: 'In this moment there is not data to show you, please try it leater',
                        internalMessage: 'No data found on json file',
                        source: method
                    }
                }
            }
            this.logger.log(`${method} data found on json file total rows:${data.length}`);
            return {
                isSuccess: true,
                content: data as HttpStatusCodesCommonClass[],
            }
        } catch (error: any) {
            this.logger.error(error.message);
            return {
                isSuccess: false,
                content: [],
                error: {
                    code: ErrorMessagesCode.INTERNAL_SERVER_ERROR,
                    friendlyMessage: 'An error occurred while trying to get the status codes from the json file',
                    internalMessage: error.message,
                    source: method
                }
            }
        }
    }
}
export default new HttpStatusCodesCommonService();