describe("Any", () => {
  it("should support in typescript", () => {
    const person: any = {
      id: 1,
      name: "M. Fandi Arfabuma",
      age: 24,
    };

    person.age = 25;
    person.country = "Indonesia";

    console.info(person);
  });
});
