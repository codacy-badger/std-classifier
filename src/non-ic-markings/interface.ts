export interface INonICMarkings {
  toString(): string;
  toJSON(): string[];

  get(): string[];

  add(nonIc: string): INonICMarkings;

  has(nonIc: string): boolean;

  rem(nonIc: string): boolean;
}
