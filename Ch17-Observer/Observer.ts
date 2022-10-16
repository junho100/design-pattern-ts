import { NumberGenerator } from "./NumberGenerator";

export interface Observer {
  update(generator: NumberGenerator): void;
}
