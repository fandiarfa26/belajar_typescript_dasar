describe("Function", () => {
  it("should support in typescript", () => {
    const sayHello = (name: string): string => {
      return `Hello ${name}`;
    };

    expect(sayHello("Fandi")).toBe("Hello Fandi");

    const printHello = (name: string): void => {
      console.info(`Hello ${name}`);
    };

    printHello("Fandi");
  });
});
