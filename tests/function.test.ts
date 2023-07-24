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

  it("should support default value", () => {
    const sayHello = (name: string = "Guest"): string => {
      return `Hello ${name}`;
    };

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Fandi")).toBe("Hello Fandi");
  });

  it("should support rest parameter", () => {
    const sum = (...values: number[]): number => {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    };

    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  it("should support optional parameter", () => {
    const sayHello = (firstName: string, lastName?: string): string => {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    };

    expect(sayHello("Fandi")).toBe("Hello Fandi");
    expect(sayHello("Fandi", "Arfabuma")).toBe("Hello Fandi Arfabuma");
  });
});
