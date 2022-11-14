import { Printable } from "./Printable";
import { Thread } from "./Thread";

export class Printer implements Printable {
  private name!: string;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
    this.heavyJob("Printer의 인스턴스를 생성중");
  }
  setPrintName(name: string) {
    this.name = name;
  }
  getPrintName() {
    return this.name;
  }
  print(string: string) {
    console.log("=== " + this.name, " ===");
    console.log(string);
  }
  private heavyJob(msg: string) {
    process.stdout.write(msg);
    for (let i = 0; i < 5; i++) {
      Thread.sleep(1000);
      process.stdout.write(".");
    }
    console.log("완료");
  }
}
