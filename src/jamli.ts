import { IJamliOptions, DEFAULT_OPTIONS } from './jamli.options';

export default class Jamli {
  constructor(public options?: Partial<IJamliOptions>) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  /**
   * Initializes Jamli
   *
   * @return {Jamli}
   */
  mount(): Jamli {
    console.log('[Jamli]: Hello, Jamli!');

    return this;
  }
}
