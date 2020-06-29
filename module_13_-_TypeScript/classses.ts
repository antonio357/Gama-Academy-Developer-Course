class Data {
    constructor(public day: number, public month: number, private year: number = 1970) {}
}
const data = new Data(1, 1)
console.log(data.day)
console.log(data.month)
// console.log(data.year)