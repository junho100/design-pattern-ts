export interface Printable {
  setPrintName(name: string): void;
  getPrintName(): string;
  print(string: string): void;
}
