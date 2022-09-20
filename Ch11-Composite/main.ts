import { Directory } from "./Directory";
import { File } from "./File";

const main = () => {
  console.log("Making Root Entries...");
  const rootdir: Directory = new Directory("root");
  const usrdir: Directory = new Directory("usr");
  rootdir.add(usrdir);
  usrdir.add(new File("vi", 1000));
  usrdir.add(new File("latex", 2000));
  rootdir.publicPrintList();
};

main();
