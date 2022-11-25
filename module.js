// @ts-check

export class Analyzer {
    /**
     * 
     * @param {number[]} data
     */
    constructor(data) {
        this.data = data;
        this.sorted = this.data.sort();
        console.log(this.sorted);
    }

    sort() {
        return this.data.sort((a, b) => a - b);
    }

    getMedian() {
        const len = this.sorted.length;
        const isOdd = len % 2;
        let middle = NaN;

        let target = len / 2 | 0;
        if (isOdd) {
            middle = this.sorted[target];
        } else {
            middle = (this.sorted[target - 1] + this.sorted[target]) / 2;
        }
        return middle;
    }
}