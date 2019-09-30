// import {Project} from "../../models/Project";

import { execSpawn } from '../services/spawnService';

// TODO
const project_home = process.env.TMP_PROJECT;
//project: Project
export function checkVersion(): Promise<String> {
  return execSpawn({command: 'npm', params: ["outdated"], options: { cwd: project_home } })
}
