import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Fandi",
      nib: "123123123",
      npwp: "123123123",
    };

    seller.name = "Arfabuma";

    console.info(seller);
  });
});
