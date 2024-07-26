import { SimpleCalculator } from "./simple-calculator";

describe("SimpleCalculator", () => {
    const simpleCalculator = new SimpleCalculator();

    it("Add function should take non empty string", () => {
        expect(() => {
            simpleCalculator.add("");
          }).toThrow("Input string cannot be empty");
    })
})