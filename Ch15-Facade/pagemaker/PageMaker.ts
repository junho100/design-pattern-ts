import { FileWriter } from "../FileWriter";
import { Database } from "./Database";
import { HtmlWriter } from "./HtmlWriter";

export class PageMaker {
  private constructor() {}
  public static makeWelcomePage(mailaddr: string, filename: string) {
    const mailprop = Database.getProperties("maildata");
    const username = mailprop.getProperty(mailaddr);
    const writer: HtmlWriter = new HtmlWriter(new FileWriter(filename));
    writer.title("Welcome to " + username + "'s page!");
    writer.paragraph(username + "의 페이지에 오신 걸 환영합니다.");
    writer.paragraph("메일을 기다리고 있습니다.");
    writer.mailto(mailaddr, username);
    writer.close();
    console.log(
      filename + " is created for " + mailaddr + "(" + username + ")"
    );
  }
}
