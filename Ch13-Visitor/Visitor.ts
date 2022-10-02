import { Directory } from "./Directory";
import { File } from "./File";

export abstract class Visitor {
  public abstract visit(data: File | Directory): void;
}
