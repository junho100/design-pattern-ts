import { Directory } from "./Directory";
import { Visitor } from "./Visitor";
import { File } from "./File";

export class ListVisitor extends Visitor {
  private currentdir = "";
  public visit(data: File | Directory): void {
    if (data instanceof File) {
      console.log(this.currentdir + "/" + data);
    } else {
      console.log(this.currentdir + "/" + data);
      const savedir: string = this.currentdir;
      this.currentdir = this.currentdir + "/" + data.getName();
      for (const d of data.directory) {
        d.accept(this);
      }
      this.currentdir = savedir;
    }
  }
}
