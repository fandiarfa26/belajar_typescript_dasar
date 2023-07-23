describe("Object", () => {
  it("should support in typescript", () => {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Fandi",
    };

    console.info(person);
  });
});
