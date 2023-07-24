import { Employee, Manager } from "../src/employee";
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

  it("should support function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 3)).toBe(5);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Fandi", "Arfa", "Buma"];

    console.info(names);
  });

  it("should support indexable interface for non number index", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Fandi",
      country: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Fandi");
    expect(dictionary["country"]).toBe("Indonesia");
  });

  it("should support extending interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Fandi",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "1",
      name: "Arfabuma",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Fandi",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Mitha"));
  });
});
