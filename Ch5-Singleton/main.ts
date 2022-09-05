import { Singleton } from "./Singleton";

const main = () => {
  console.log("start");

  const ob1: Singleton = Singleton.getInstance();
  const ob2: Singleton = Singleton.getInstance();

  if (ob1 === ob2) {
    console.log("ob1 and ob2 are same instance");
  } else {
    console.log("ob1 and ob2 are different");
  }
};

main();
