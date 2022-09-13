import { Tray } from "../factory/Tray";
import { StringBuffer } from "../StringBuffer";

export class TableTray extends Tray {
  constructor(caption: string) {
    super(caption);
  }

  public makeHTML(): string {
    const buffer: StringBuffer = new StringBuffer();
    buffer.append("<td>");
    buffer.append('<table width="100%" border="1"></tr>');
    buffer.append(
      `<td bgcolor="#cccccc" align="center" colspan="${this.tray.length}"><b>${this.caption}</b></td>`
    );
    buffer.append("</tr>\n");
    buffer.append("<tr>\n");
    for (const t of this.tray) {
      buffer.append(t.makeHTML());
    }
    buffer.append("</tr></table>");
    buffer.append("</td>");
    return buffer.toString();
  }
}
