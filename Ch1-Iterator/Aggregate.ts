import { _Iterator } from "./Iterator";

export abstract class Aggregate {
  public abstract iterator(): _Iterator;
}
