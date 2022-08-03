console.log('Hello ae');
let sum = (a, b, callback) => {
    let tong = a + b;
    setTimeout(() => {
    callback(tong)
   },5000)
}
let printSum = (message) => {
    console.log('Check sum:',message)
}
sum(6, 9, printSum)