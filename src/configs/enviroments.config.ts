import { version } from "typescript";

export class EnviromentsConfig {
    static Variable = {
        server:{
            port: Number(process.env.SERVER_PORT) || 4000,
            enviroment: process.env.SERVER_ENVIROMENT || 'development',
            tag: process.env.SERVER_TAG || 'api',
            version: process.env.SERVER_VERSION || 'v1',
        }
    }
}