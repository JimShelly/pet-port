import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    console.log("File Path", filePath);
    console.log("Process", process.cwd());

    this.envConfig = dotenv.parse(fs.readFileSync(process.cwd() + '/.env'));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
