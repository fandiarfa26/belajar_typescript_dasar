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
});
