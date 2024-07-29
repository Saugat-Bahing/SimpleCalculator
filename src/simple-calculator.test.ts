import { SimpleCalculator } from "./simple-calculator";

describe("calculateFunctionErrorValidation", () => {
    const simpleCalculator = new SimpleCalculator();

    it("calculate function should not take undefined values", () => {
        expect(() => {
            const testObj: any = {};
            simpleCalculator.calculate(testObj.undefined);
        }).toThrow("Input string cannot be null|undefined");
    })

    it("calculate function should not take null values", () => {
        expect(() => {
            const testObj: any = { value: null };
            simpleCalculator.calculate(testObj.value);
        }).toThrow("Input string cannot be null|undefined");
    })

    it("calculate function should take negative numbers in string", () => {
        expect(() => {
            simpleCalculator.calculate("10, 20, -2, 0");
        }).toThrow("negative numbers not allowed -2.");
    })

    it("calculate function should take multiple negative numbers in string", () => {
        expect(() => {
            simpleCalculator.calculate("-10, 20, -2, 0, -100, 2, 0, -11");
        }).toThrow("negative numbers not allowed -10, -2, -100, -11.");
    })

    it("Negative numbers with deliminator", () => {
        expect(() => {
            simpleCalculator.calculate("//;\n10;-20,0,-8");
        }).toThrow("negative numbers not allowed -20, -8.")
    })
})

describe("calculateFunctionBehavour", () => {
    const simpleCalculator = new SimpleCalculator();

    it("Empty string should return 0", () => {
        expect(simpleCalculator.calculate("")).toEqual(0);
    })

    it("calculate function should add comma seperated numbers", () => {
        expect(simpleCalculator.calculate("1,2,3")).toEqual(6);
    })

    it("calculate function should add comma seperated numbers", () => {
        expect(simpleCalculator.calculate("100,21,32,89")).toEqual(242);
    })

    it("calculate function should add comma seperated numbers along with new line", () => {
        expect(simpleCalculator.calculate("100,21\n32,89")).toEqual(242);
    })

    it("calculate function should add comma seperated numbers along with new line", () => {
        expect(simpleCalculator.calculate("100\n21\n32\n89")).toEqual(242);
    })

    it("calculate function should add custom deliminator seperated numbers", () => {
        expect(simpleCalculator.calculate("//;\n100;21;32;89")).toEqual(242);
    })


    it("calculate function should add custom deliminator seperated numbers", () => {
        expect(simpleCalculator.calculate("//;\n100;21\n32\n89")).toEqual(242);
    })

    // 10,?20,30
    it("Skip number followed by character", () => {
        expect(simpleCalculator.calculate("10,20,40,?90")).toEqual(70);
    })

    it("Should multiply if the deliminator is astrisk(*)", () => {
        expect(simpleCalculator.calculate("//*\n100*200*10")).toEqual(200000);
    })
})
