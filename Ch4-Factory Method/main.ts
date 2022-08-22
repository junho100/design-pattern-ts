import { Factory } from "./Factory";
import { IDCardFactory } from "./IDCardFactory";
import { Product } from "./Product";

const main = () => {
  const factroy: Factory = new IDCardFactory();
  const card1: Product = factroy.create("홍길동");
  const card2: Product = factroy.create("이순신");
  const card3: Product = factroy.create("강감찬");
  card1.use();
  card2.use();
  card3.use();
};

main();
