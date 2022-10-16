import { Observer } from "./Observer";

export abstract class NumberGenerator {
  private observers: Array<Observer> = [];
  public addObserver(observer: Observer) {
    this.observers.push(observer);
  }
  public deleteObserver(observer: Observer) {
    this.observers = this.observers.filter((ob) => ob != observer);
  }
  public notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
  public abstract getNumber(): number;
  public abstract execute(): void;
}
