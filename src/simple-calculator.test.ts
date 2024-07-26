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

    it("Add function should take negative numbers in string", () => {
        expect(() => {
            simpleCalculator.add("10, 20, -2, 0");
          }).toThrow("negative numbers not allowed -2.");
    })

    it("Add function should take multiple negative numbers in string", () => {
        expect(() => {
            simpleCalculator.add("-10, 20, -2, 0, -100, 2, 0, -11");
          }).toThrow("negative numbers not allowed -10, -2, -100, -11.");
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

    it("Add function should add comma seperated numbers along with new line", () => {
        expect(simpleCalculator.add("100,21\n32,89")).toEqual(242);
    })

    it("Add function should add comma seperated numbers along with new line", () => {
        expect(simpleCalculator.add("100\n21\n32\n89")).toEqual(242);
    })

    it("Add function should add dynamic deliminator seperated numbers", () => {
        expect(simpleCalculator.add("//;\n100;21;32;89")).toEqual(242);
    })

    
    it("Add function should add dynamic deliminator seperated numbers", () => {
        expect(simpleCalculator.add("//;\n100;21\n32\n89")).toEqual(242);
    })
})