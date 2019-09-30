import express from 'express';

import versionRouter from "./outdated/versionRouter";

const app: express.Application = express();

app.use("/", versionRouter);

module.exports = app;
