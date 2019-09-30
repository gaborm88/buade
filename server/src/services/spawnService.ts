import { spawn } from 'child_process';

type Options = {command: string, params: string[], options: {}}

export function execSpawn({command, params, options}: Options): Promise<String> {
  const child = spawn(command, params, options)

  return new Promise<String>((resolve, reject) => {
    const resolver: {text: string} = { text: "" }

    child.on('exit', function (code, signal) {
      console.log(`child process exited with code ${code} and signal ${signal}`);
      resolve(resolver.text)
    });
    
    child.stdout.on('data', (data) => {
      resolver.text = resolver.text.concat(data)
      console.log(`child stdout:\n${data}`);
    });
    child.stderr.on('data', (data) => {
      console.error(`child stderr:\n${data}`);
      reject(data)
    });
  })
}
