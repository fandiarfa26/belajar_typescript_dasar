"use strict";
describe("Function", () => {
    it("should support in typescript", () => {
        const sayHello = (name) => {
            return `Hello ${name}`;
        };
        expect(sayHello("Fandi")).toBe("Hello Fandi");
        const printHello = (name) => {
            console.info(`Hello ${name}`);
        };
        printHello("Fandi");
    });
});
