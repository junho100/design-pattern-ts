import { Property } from "../Property";

export class Database {
  private constructor() {}

  public static getProperties(dbname: string) {
    const filename: string = dbname + ".txt";
    const prop = new Property();
    prop.load(filename);
    return prop;
  }
}
