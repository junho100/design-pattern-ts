import { Product } from "./Product";

export class IDCard extends Product {
  private owner: string;
  constructor(owner: string) {
    // private 생성자면 외부에서 product 클래스를 직접 생성할 수 없다.
    super();
    console.log(owner + " create card");
    this.owner = owner;
  }

  public use(): void {
    console.log(this.owner + "use card");
  }

  public getOwner(): string {
    return this.owner;
  }
}
