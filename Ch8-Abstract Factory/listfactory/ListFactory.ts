import { Factory } from "../factory/Factory";
import { Link } from "../factory/Link";
import { Page } from "../factory/Page";
import { Tray } from "../factory/Tray";
import { ListLink } from "./ListLink";
import { ListPage } from "./ListPage";
import { ListTray } from "./ListTray";

export default class ListFactory extends Factory {
  public createLink(caption: string, url: string): Link {
    return new ListLink(caption, url);
  }
  public createTray(caption: string): Tray {
    return new ListTray(caption);
  }
  public createPage(title: string, author: string): Page {
    return new ListPage(title, author);
  }
}
