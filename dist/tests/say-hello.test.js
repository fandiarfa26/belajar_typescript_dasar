import { sayHello } from "../src/say-hello";
describe("sayHello", () => {
    it("should return Hello Fandi", () => {
        expect(sayHello("Fandi")).toBe("Hello Fandi");
    });
});
