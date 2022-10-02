import { Directory } from "./Directory";
import { File } from "./File";
import { ListVisitor } from "./ListVisitor";

const main = () => {
  console.log("make root entries");
  const rootdir: Directory = new Directory("root");
  const bindir = new Directory("bin");
  rootdir.add(bindir);
  bindir.add(new File("vi", 1000));
  rootdir.accept(new ListVisitor());
};

main();
