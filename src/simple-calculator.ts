export class SimpleCalculator {
    public add(numbers: string): number {
        if(typeof(numbers) === 'undefined' || numbers === null){
            throw new Error("Input string cannot be null|undefined");
        }
        if(numbers.trim() == ""){
            throw new Error("Input string cannot be empty");
        }
        return 1;
    }
}