import { Director } from "./Director";
import { HTMLBuilder } from "./HTMLBuilder";
import { TextBuilder } from "./TextBuilder";

const main = () => {
  if (process.env.NODE_ENV === "plain") {
    const textBuilder: TextBuilder = new TextBuilder();
    const director: Director = new Director(textBuilder);
    director.construct();
    const result: string = textBuilder.getResult();
    console.log(result);
  } else if (process.env.NODE_ENV === "html") {
    const htmlbuilder: HTMLBuilder = new HTMLBuilder();
    const director: Director = new Director(htmlbuilder);
    director.construct();
    const filename: string = htmlbuilder.getResult();
    console.log(filename + "is created.");
  }
};

main();
