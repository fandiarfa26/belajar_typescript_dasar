"use strict";
describe("Optional Parameter", () => {
    it("should support null & undefined", () => {
        const sayHello = (name) => {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        };
        sayHello("Fandi");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
