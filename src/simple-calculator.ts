export class SimpleCalculator {
    public add(numbers: string): number {
        this.validateInputNullOrEmpty(numbers);
        this.validateNegaiveNumbers(numbers);
        const formattedNumbers = this.getNumbersFromString(numbers);
        return this.sum(formattedNumbers);
    }

    private validateInputNullOrEmpty(numbers: string): void {
        if (typeof numbers === "undefined" || numbers === null) {
            throw new Error("Input string cannot be null|undefined");
        }
        if (numbers.trim() == "") {
            throw new Error("Input string cannot be empty");
        }
    }

    private validateNegaiveNumbers(numbers: string): void {
        const negativeNumbers = numbers.match(/-(\d+)/g);
        console.log(negativeNumbers, numbers);
        if (negativeNumbers !== null) {
            let errMsg = "negative numbers not allowed ";
            for (let i = 0; i < negativeNumbers.length; i++) {
                if (i != negativeNumbers.length - 1) {
                    errMsg += negativeNumbers[i] + ", ";
                } else {
                    errMsg += negativeNumbers[i] + ".";
                }
            }
            throw new Error(errMsg);
        }
    }

    private getNumbersFromString(numbers: string): number[] {
        let deliminator = ",";
        if (numbers.startsWith("//")) {
            deliminator = numbers[2];
            numbers = numbers.substring(4);
        }
        const splitRegex = new RegExp(`${deliminator}|\n`);
        const splitNumbers = numbers
            .split(splitRegex)
            .map((no) => parseInt(no.trim()));
        return splitNumbers;
    }

    private sum(numbers: number[]): number {
        let sum = 0;
        numbers.forEach((n) => (sum += n));
        return sum;
    }
}
