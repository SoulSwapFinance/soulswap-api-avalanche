import express, { Express } from "express";
import http from "http";
import morgan from "morgan";
const cors = require('@koa/cors');

import routes from "./routes/main";
const router: Express = express();

router.use(morgan("dev"));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cors({ origin: '*' }));
router.use(router.routes());

router.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

const httpServer = http.createServer(router);
const port = process.env.PORT || 3000;

httpServer.listen(port, () => console.log(`App listening on PORT ${port}`));
