describe("Loop", () => {
  it("should support for loop", () => {
    const names: string[] = ["Fandi", "Arfabuma"];

    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    for (const name of names) {
      console.info(name);
    }

    for (const index in names) {
      console.info(names[index]);
    }
  });

  it("should support while loop", () => {
    let counter: number = 0;

    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });

  it("should support do while loop", () => {
    let counter: number = 0;

    do {
      console.info(counter);
      counter++;
    } while (counter < 10);
  });
});
