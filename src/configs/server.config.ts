import express, { Application } from "express";
import { rateLimit } from "express-rate-limit";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { EnviromentsConfig } from './enviroments.config';
import Logger from "../common/logger/logger.service";
import { router } from "../routes/index";

export class Server {
  private env = EnviromentsConfig.Variable;
  private app: Application;
  private port: number;
  private logger = Logger;

  limiter = rateLimit({
    windowMs: 15000,
    max: 5,
    message: " Too many requests, please try again later",
  });

  constructor() {
    this.app = express();
    this.port = this.env.server.port
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(helmet());
    this.app.use(this.limiter);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("./public"));
    this.app.use(`/${this.env.server.tag}/${this.env.server.version}`, express.static("public"));
  }

  private routes() {
    this.app.use(router);
  }
  listen() {
    this.app.listen(this.port, () => {
      this.logger.log(`Server running on port ${this.port}`);
    });
  }
}