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
    it("should support indexable interface", () => {
        const names = ["Fandi", "Arfa", "Buma"];
        console.info(names);
    });
    it("should support indexable interface for non number index", () => {
        const dictionary = {
            name: "Fandi",
            country: "Indonesia",
        };
        expect(dictionary["name"]).toBe("Fandi");
        expect(dictionary["country"]).toBe("Indonesia");
    });
    it("should support extending interface", () => {
        const employee = {
            id: "1",
            name: "Fandi",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "1",
            name: "Arfabuma",
            division: "IT",
            numberOfEmployees: 10,
        };
        console.info(manager);
    });
});
export {};
