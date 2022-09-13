import { Tray } from "../factory/Tray";
import { StringBuffer } from "../StringBuffer";

export class ListTray extends Tray {
  constructor(caption: string) {
    super(caption);
  }

  public makeHTML(): string {
    const buffer: StringBuffer = new StringBuffer();
    buffer.append("<li>\n");
    buffer.append(this.caption + "\n");
    buffer.append("<ul>\n");
    for (const t of this.tray) {
      buffer.append(t.makeHTML());
    }
    buffer.append("</ul>\n");
    buffer.append("</li>\n");
    return buffer.toString();
  }
}
