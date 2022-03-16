export interface ITag {
  label: string;
  /** supported web colors */
  color: SupportedColors;
}

type SupportedColors = 'red' | 'blue' | 'green';
