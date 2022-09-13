import { Factory } from "../factory/Factory";
import { Link } from "../factory/Link";
import { Page } from "../factory/Page";
import { Tray } from "../factory/Tray";
import { TableLink } from "./TableLink";
import { TablePage } from "./TablePage";
import { TableTray } from "./TableTray";

export default class TableFactory extends Factory {
  public createLink(caption: string, url: string): Link {
    return new TableLink(caption, url);
  }
  public createTray(caption: string): Tray {
    return new TableTray(caption);
  }
  public createPage(title: string, author: string): Page {
    return new TablePage(title, author);
  }
}
