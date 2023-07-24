import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
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
    const person: Person = {
      name: "Fandi",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Mitha"));
  });

  it("should support intersection type", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Fandi",
    };

    console.info(domain);
  });

  it("should support type assertion", () => {
    const person: any = {
      name: "Fandi",
      age: 25,
    };

    const person2: Person = person as Person;
    //person2.sayHello("test"); // gagal karena sudah diganti dgn person yg baru

    console.info(person2);
  });
});
