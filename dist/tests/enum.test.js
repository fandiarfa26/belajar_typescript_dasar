import { CustomerType } from "../src/enum";
describe("Enum Type", () => {
    it("should support in typescript", () => {
        const customer = {
            id: "1",
            name: "Fandi",
            type: CustomerType.GOLD,
        };
        console.info(customer);
    });
});
