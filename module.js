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

    average() {
        const len = this.data.length;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            sum += this.data[i];
        }
        return sum / len;
    }

    sort() {
        return this.data.sort((a, b) => a - b);
    }

    median() {
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

    q1() {
        const len = this.sorted.length;
        const forward = new Analyzer(this.sorted.slice(0, (len / 2 | 0)));;

        return forward.median();
    }

    q3() {
        const len = this.sorted.length;
        const forward = new Analyzer(this.sorted.slice(0, (len / 2 | 0)));;

        return forward.median();
    }

    squareS() {
        const len = this.sorted.length;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            sum = (this.sorted[i] - this.average()) ** 2;
        }
        return sum / len;
    }

    s() {
        return Math.sqrt(this.squareS());
    }

    min() {
        return this.sorted[0];
    }

    max() {
        return this.sorted[this.sorted.length - 1];
    }
}