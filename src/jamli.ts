import { IJamliOptions, DEFAULT_OPTIONS } from './jamli.options';

export default class Jamli {
  public options: IJamliOptions;

  constructor(options?: Partial<IJamliOptions>) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }
}
