import { Builder } from "./Builder";

export class Director {
  constructor(builder: Builder) {
    this.builder = builder;
  }
  private builder: Builder;

  public construct() {
    this.builder.makeTitle("Greeting");
    this.builder.makeString("아침과 낮에");
    this.builder.makeItems(["좋은 아침입니다.", "안녕하세요."]);
    this.builder.makeString("밤에");
    this.builder.makeItems([
      "안녕하세요",
      "안녕히 주무세요.",
      "안녕히 계세요.",
    ]);
    this.builder.close();
  }
}
