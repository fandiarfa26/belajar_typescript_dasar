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
    it("should support default value", () => {
        const sayHello = (name = "Guest") => {
            return `Hello ${name}`;
        };
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Fandi")).toBe("Hello Fandi");
    });
    it("should support rest parameter", () => {
        const sum = (...values) => {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        };
        expect(sum(1, 2, 3, 4)).toBe(10);
    });
    it("should support optional parameter", () => {
        const sayHello = (firstName, lastName) => {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        };
        expect(sayHello("Fandi")).toBe("Hello Fandi");
        expect(sayHello("Fandi", "Arfabuma")).toBe("Hello Fandi Arfabuma");
    });
    it("should support function overloading", () => {
        function callMe(value) {
            if (typeof value === "number") {
                return value * 10;
            }
            else if (typeof value === "string") {
                return value.toUpperCase();
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("fandi")).toBe("FANDI");
    });
});
