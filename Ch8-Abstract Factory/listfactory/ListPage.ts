import { Page } from "../factory/Page";
import { StringBuffer } from "../StringBuffer";

export class ListPage extends Page {
  constructor(title: string, author: string) {
    super(title, author);
  }

  public makeHTML(): string {
    const buffer: StringBuffer = new StringBuffer();

    buffer.append("<html><head><title>" + this.title + "</title></head>\n");
    buffer.append("<body>\n");
    buffer.append("<h1>" + this.title + "</h1>\n");
    buffer.append("<ul>\n");

    for (const c of this.content) {
      buffer.append(c.makeHTML());
    }
    buffer.append("</ul>\n");
    buffer.append("<hr><address>" + this.author + "</address>");
    buffer.append("</body></html>\n");
    return buffer.toString();
  }
}
