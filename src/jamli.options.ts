export type JamliTypeOptions = 'slider' | 'carousel';

export interface IJamliOptions {
  type: JamliTypeOptions;
  showDots: boolean;
  showArrows: boolean;
  autoplay: boolean;
  duration: number;
}

export const DEFAULT_OPTIONS: IJamliOptions = {
  type: 'carousel',
  showDots: true,
  showArrows: true,
  autoplay: true,
  duration: 2000,
};
