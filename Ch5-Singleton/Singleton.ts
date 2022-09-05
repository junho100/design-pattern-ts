export class Singleton {
  private static singleton: Singleton = new Singleton(); //js로 컴파일 시 마지막에 Singleton.singleton = new Singleton()으로 변환한다.

  private constructor() {
    console.log("instance created.");
  }

  public static getInstance(): Singleton {
    return this.singleton;
  }
}
