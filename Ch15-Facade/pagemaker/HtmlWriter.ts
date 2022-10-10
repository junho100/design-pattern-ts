import { Writer } from "../Writer";

export class HtmlWriter {
  private writer: Writer;
  constructor(writer: Writer) {
    this.writer = writer;
  }
  public title(title: string) {
    this.writer.write("<html>");
    this.writer.write("<head>");
    this.writer.write("<title>" + title + "</title>");
    this.writer.write("</head>");
    this.writer.write("<body>\n");
    this.writer.write("<h1>" + title + "</h1>\n");
  }
  public paragraph(msg: string) {
    this.writer.write("<p>" + msg + "</p>\n");
  }
  public link(href: string, caption: string) {
    this.paragraph('<a href="' + href + '">' + caption + "</a>");
  }
  public mailto(mailaddr: string, username: string) {
    this.link("mailto:" + mailaddr, username);
  }
  public close() {
    this.writer.write("</body>");
    this.writer.write("</html>\n");
    this.writer.close();
  }
}
