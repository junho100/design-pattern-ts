import { Link } from "../factory/Link";

export class TableLink extends Link {
  constructor(caption: string, url: string) {
    super(caption, url);
  }

  public makeHTML(): string {
    return `<td><a href="${this.url}">${this.caption}</a></td>\n`;
  }
}
