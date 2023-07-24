describe("If Statement", () => {
  it("should support in typescript", () => {
    const examValue = 75;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try Again");
    }
  });

  it("should support ternary operator", () => {
    const value = 80;
    const say = value > 75 ? "Congrats" : "Oops";
    console.info(say);
  });

  it("should support switch statement", () => {
    function sayHello(name: string): string {
      switch (name) {
        case "Fandi":
          return "Hi Fandi";
        case "Arfabuma":
          return "Hi Arfabuma";
        default:
          return "Hello";
      }
    }

    expect(sayHello("Fandi")).toBe("Hi Fandi");
    expect(sayHello("Arfabuma")).toBe("Hi Arfabuma");
    expect(sayHello("Eko")).toBe("Hello");
  });
});
