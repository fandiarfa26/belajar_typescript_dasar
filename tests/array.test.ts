describe("Array", () => {
  it("should declare array", () => {
    const names: string[] = ["fandi", "arfa", "buma"];
    const values: number[] = [0, 1, 2];

    console.info(names);
    console.info(values);
  });

  it("should declare readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    console.info(hobbies);
    console.info(hobbies[0]);
  });

  it("should declare tuple", () => {
    const person: readonly [string, string, number] = ["Fandi", "Arfabuma", 25];

    console.info(person);
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
