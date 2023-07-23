describe("Union Type", () => {
  it("should support in typescript", () => {
    let sample: string | number | boolean = "Fandi";
    sample = 100;
    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", () => {
    const process = (value: number | string | boolean) => {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    };

    expect(process(100)).toBe(102);
    expect(process("fandi")).toBe("FANDI");
    expect(process(true)).toBe(false);
  });
});
