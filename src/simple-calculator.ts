export class SimpleCalculator {
    public add(numbers: string): number {
        if(numbers.trim() == ""){
            throw new Error("Input string cannot be empty");
        }
        return 1;
    }
}