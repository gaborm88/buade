// import {Project} from "../../models/Project";

import { runSpawn } from '../services/spawnService';

// TODO
const project_home = process.env.TMP_PROJECT;
//project: Project
export function checkVersion(): Promise<any> {
  return runSpawn({command: 'npm', params: ["outdated"], options: { cwd: project_home } })
}
