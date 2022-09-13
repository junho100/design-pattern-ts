import { Page } from "../factory/Page";
import { StringBuffer } from "../StringBuffer";

export class TablePage extends Page {
  constructor(title: string, author: string) {
    super(title, author);
  }

  public makeHTML(): string {
    const buffer: StringBuffer = new StringBuffer();
    buffer.append("<html><head><title>" + this.title + "</title></head>\n");
    buffer.append("<body>\n");
    buffer.append("<h1>" + this.title + "</h1>\n");
    buffer.append('<table width="80%" border="3">\n');
    for (const c of this.content) {
      buffer.append("<tr>" + c.makeHTML() + "</tr>");
    }
    buffer.append("</table>\n");
    buffer.append("<hr><address>" + this.author + "</address>");
    buffer.append("</body></html>\n");
    return buffer.toString();
  }
}
