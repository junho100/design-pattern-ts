import { Banner } from "./Banner";
import { Print } from "./Print";

export class PrintBanner extends Print {
  private banner: Banner;
  constructor(str: string) {
    super();
    this.banner = new Banner(str);
  }
  public printWeak(): void {
    this.banner.showWithParen();
  }
  public printStrong(): void {
    this.banner.showWithAster();
  }
}
