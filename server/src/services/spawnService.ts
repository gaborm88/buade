import { spawn } from 'child_process';

type runSpawnParams = {command: string, params: string[], options: object};

export function runSpawn({command, params, options}: runSpawnParams): Promise<any> {
  console.log({command, params, options})
  const child = spawn(command, params, options)

  return new Promise<any>((resolve, reject) => {
    const output: any = []
    const error: any = []

    child.stdout.on('data', (data) => {
      output.push(...data.toString().split('\n'))
    });
    child.stderr.on('data', (data) => {
      error.push(...data.toString().split('\n'))
    });

    child.on('close', () => error.length === 0 ? resolve(output) : reject(error))
  })
}
