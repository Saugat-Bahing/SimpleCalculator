export class SimpleCalculator {
    public add(numbers: string): number {
        this.validateInputNullOrUndefine(numbers);
        if (numbers.trim() === "") {
            return 0;
        }
        this.validateNegaiveNumbers(numbers);
        const deliminator = this.getDeliminator(numbers);
        const formattedNumbers = this.getNumbersFromString(numbers, deliminator);
        return this.sum(formattedNumbers);
    }

    private removeDeliminatorFromStartOfString(numbers: string): string {
        if (numbers.startsWith("//")) {
            numbers = numbers.substring(4);
        }
        return numbers;
    }

    private validateInputNullOrUndefine(numbers: string): void {
        if (typeof numbers === "undefined" || numbers === null) {
            throw new Error("Input string cannot be null|undefined");
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

    private getDeliminator(numbers: string): string {
        let deliminator = ",";
        if (numbers.startsWith("//")) {
            deliminator = numbers[2];
        }
        return deliminator;
    }

    private getNumbersFromString(numbers: string, deliminator: string): number[] {
        const formattedNumbers = this.removeDeliminatorFromStartOfString(numbers);
        const noAfterQuetionMark = formattedNumbers.match(/\?(\d+)/g);

        const splitRegex = new RegExp(`${deliminator}|\n`);
        const splitNumbers = formattedNumbers
            .split(splitRegex)
            .map((no) => parseInt(no.trim()));
        if (noAfterQuetionMark !== null) {
            noAfterQuetionMark.forEach((no) => {
                splitNumbers.splice(splitNumbers.indexOf(parseInt(no)), 1);
            })
        }
        return splitNumbers;
    }

    private sum(numbers: number[]): number {
        let sum = 0;
        numbers.forEach((n) => (sum += n));
        return sum;
    }
}
