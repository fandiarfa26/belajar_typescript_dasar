describe("Optional Parameter", () => {
  it("should support null & undefined", () => {
    const sayHello = (name?: string | null) => {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    };

    sayHello("Fandi");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
