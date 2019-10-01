import express from 'express';

import versionRouter from "./outdated/versionRouter";

const app: express.Application = express();

app.use("/api/", versionRouter);

module.exports = app;
