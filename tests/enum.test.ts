import { Customer, CustomerType } from "../src/enum";

describe("Enum Type", () => {
  it("should support in typescript", () => {
    const customer: Customer = {
      id: "1",
      name: "Fandi",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
