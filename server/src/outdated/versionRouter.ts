import express from "express";
import { checkVersion } from "./versionService";

const router: express.Router = express.Router();

router.get("/", function(_, res: express.Response) {
  checkVersion()
  .then(output => {
    console.log({output})
    res.send(output);
  }).catch(err => {
    console.log({err})
    res.status(500).send(err.message);
  });
});

export default router;
