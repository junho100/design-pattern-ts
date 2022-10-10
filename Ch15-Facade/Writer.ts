export abstract class Writer {
  public abstract write(data: string): void;
  public abstract close(): void;
}
