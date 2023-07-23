import { sayHello } from "../src/say-hello";

describe("sayHello", (): void => {
  it("should return Hello Fandi", (): void => {
    expect(sayHello("Fandi")).toBe("Hello Fandi");
  });
});
