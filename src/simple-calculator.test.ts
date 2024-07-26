import { SimpleCalculator } from "./simple-calculator";

describe("AddFunctionErrorValidation", () => {
    const simpleCalculator = new SimpleCalculator();

    it("Add function should not take undefined values", () => {
        expect(() => {
            const testObj:any = {};
            simpleCalculator.add(testObj.undefined);
          }).toThrow("Input string cannot be null|undefined");
    })

    it("Add function should not take null values", () => {
        expect(() => {
            const testObj:any = {value: null};
            simpleCalculator.add(testObj.value);
          }).toThrow("Input string cannot be null|undefined");
    })

    it("Add function should take non empty string", () => {
        expect(() => {
            simpleCalculator.add("");
          }).toThrow("Input string cannot be empty");
    })
})

describe("AddFunctionBehavour", () => {
    const simpleCalculator = new SimpleCalculator();

    it("Add function should add comma seperated numbers", () => {
        expect(simpleCalculator.add("1,2,3")).toEqual(6);
    })

    it("Add function should add comma seperated numbers", () => {
        expect(simpleCalculator.add("100,21,32,89")).toEqual(242);
    })
})