import { Product } from "./Product";

type IShowcase = Record<string, Product>;

export class Manager {
  private showcase: IShowcase = {};
  public register(name: string, proto: Product) {
    this.showcase[name] = proto;
  }

  public create(protoName: string): Product {
    const p = this.showcase[protoName];
    const result = p.createClone();
    return result;
  }
}
