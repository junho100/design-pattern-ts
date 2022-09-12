import { Builder } from "./Builder";
import { FileWriter, PrintWriter } from "./Writers";

export class HTMLBuilder extends Builder {
  private filename!: string;
  private writer!: PrintWriter;

  makeTitle(title: string) {
    this.filename = title + ".html";
    this.writer = new PrintWriter(new FileWriter(this.filename));
    this.writer.println(
      "<html><head><title>" + title + "</title></head><body>"
    );
    this.writer.println("<h1>" + title + "</h1>");
  }

  makeString(str: string): void {
    this.writer.println("<p>" + str + "</p>");
  }

  makeItems(items: string[]): void {
    this.writer.println("<ul>");
    for (const item of items) {
      this.writer.println("<li>" + item + "</li>");
    }
    this.writer.println("</ul>");
  }

  close(): void {
    this.writer.println("</body></html>");
    this.writer.close();
  }

  getResult() {
    return this.filename;
  }
}
