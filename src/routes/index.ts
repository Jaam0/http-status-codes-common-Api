import { Router } from "express";
import { readdirSync } from "fs";
import { EnviromentsConfig } from '../configs/enviroments.config';
const env = EnviromentsConfig.Variable;

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => fileName.split(".").shift();

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);

    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`-- The routes are loading... /${cleanName} --`);
            router.use(`/${env.server.tag}/${env.server.version}/${cleanName}`, moduleRouter.router);
        });
    }
});

export { router };
