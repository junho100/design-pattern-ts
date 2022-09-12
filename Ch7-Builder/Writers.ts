import fs from "fs";

export class FileWriter {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }
}
export class PrintWriter {
  fileWriter: FileWriter;

  constructor(fileWriter: FileWriter) {
    this.fileWriter = fileWriter;
    fs.writeFileSync(this.fileWriter.filename, "");
  }

  println(data: string) {
    fs.appendFileSync(this.fileWriter.filename, data);
  }
  close() {
    return;
  }
}
