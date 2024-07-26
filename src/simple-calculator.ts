export class SimpleCalculator {
    public add(numbers: string): number {
        if(typeof(numbers) === 'undefined' || numbers === null){
            throw new Error("Input string cannot be null|undefined");
        }
        if(numbers.trim() == ""){
            throw new Error("Input string cannot be empty");
        }
        let deliminator = ",";
        if(numbers.startsWith("//")){
            deliminator = numbers[2];
            numbers = numbers.substring(4);
        }
        const splitRegex = new RegExp(`${deliminator}|\n`)
        const splitNumbers = numbers.split(splitRegex).map(no => parseInt(no.trim()));
        return this.sum(splitNumbers);
    }

    private sum(numbers: number[]): number {
        let sum = 0;
        numbers.forEach(n => sum+= n);
        return sum;
    }
}