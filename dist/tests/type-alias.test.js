describe("Type Alias", () => {
    it("should support in typescript", () => {
        const category = {
            id: "1",
            name: "Handphone",
        };
        const product = {
            id: "1",
            name: "Iphone 14",
            price: 20000000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
