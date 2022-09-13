import { Factory } from "./factory/Factory";
import { Link } from "./factory/Link";
import { Page } from "./factory/Page";
import { Tray } from "./factory/Tray";

const createUrl = (data: string): string => {
  return `http://www.${data}.com/`;
};

const main = async () => {
  const classpath = process.env.NODE_ENV as string;

  const factory: Factory = await Factory.getFactory(classpath);

  const joins: Link = factory.createLink("joins", createUrl("joins"));
  const chosun: Link = factory.createLink("chosun", createUrl("chosun"));

  const excite: Link = factory.createLink("excite", createUrl("excite"));
  const google: Link = factory.createLink("google", createUrl("google"));

  const traynews: Tray = factory.createTray("newspaper");
  traynews.add(joins);
  traynews.add(chosun);

  const traysearch: Tray = factory.createTray("search engine");
  traysearch.add(excite);
  traysearch.add(google);

  const page: Page = factory.createPage("LinkPage", "dot com");
  page.add(traynews);
  page.add(traysearch);
  page.output();
};

main();
