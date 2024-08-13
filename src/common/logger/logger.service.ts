import { createLogger, format, transports } from 'winston';

class Logger {
    private  logger:any;
    constructor(){
        this.logger = createLogger({
            format: format.combine(
              format.timestamp(),
              format.printf(({ timestamp, level, message }) => {
                return `${timestamp} [${level}]: ${message}`;
              }),
              format.json(),
              format.colorize(
                { all: true }
              )
            ),
            transports: [
              new transports.Console(),
              new transports.File({ filename: 'combined.log' })
            ]
          })
    }
    log(message:any){
        this.logger.info(message);
    }
    warn(message:any){
        this.logger.warn(message);
    };
    error(message:any){
        this.logger.error(message);
    }
    debug(message:any){
        this.logger.debug(message);
    }
}
export default new Logger();