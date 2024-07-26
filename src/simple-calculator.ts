export class SimpleCalculator {
    public add(numbers: string): number {
        if(typeof(numbers) === 'undefined' || numbers === null){
            throw new Error("Input string cannot be null|undefined");
        }
        if(numbers.trim() == ""){
            throw new Error("Input string cannot be empty");
        }
        const splitNumbers = numbers.split(',').map(no => parseInt(no.trim()));
        return this.sum(splitNumbers);
    }

    private sum(numbers: number[]): number {
        let sum = 0;
        numbers.forEach(n => sum+= n);
        return sum;
    }
}