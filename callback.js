console.log("1. log")

setTimeout(() => {
    console.log("2. log 5 sn sonra")
}, 5000);

function normFunc(text) {
    setTimeout(() => { return text }, 5000);
}
let newVal = normFunc("2. log fonksiyon ile 5 sn sonra")
console.log(newVal)

function normFunc(text1, callback) {
    setTimeout(() => {
        callback(text1)
    }, 6000);
}
let newVal1 = normFunc("2. log callback fonksiyon ile 6 sn sonra", (newVal1) => {
    console.log(newVal1)
})

console.log("3. log")
