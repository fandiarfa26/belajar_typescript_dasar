describe("Interface", () => {
    it("should support in typescript", () => {
        const seller = {
            id: 1,
            name: "Fandi",
            nib: "123123123",
            npwp: "123123123",
        };
        seller.name = "Arfabuma";
        console.info(seller);
    });
    it("should support function interface", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 3)).toBe(5);
    });
});
export {};
