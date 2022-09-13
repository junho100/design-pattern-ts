import { Link } from "./Link";
import { Page } from "./Page";
import { Tray } from "./Tray";

export abstract class Factory {
  public static async getFactory(classpath: string): Promise<Factory> {
    let factory: Factory;
    const { default: concreteFactoryClass } = await import(classpath);
    factory = new concreteFactoryClass();

    return factory;
  }

  public abstract createLink(caption: string, url: string): Link;
  public abstract createTray(caption: string): Tray;
  public abstract createPage(title: string, author: string): Page;
}
