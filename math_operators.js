console.log("Matematiksel nesneler...")

console.log(Math.abs(-5))
console.log(Math.ceil(5.2))
console.log(Math.floor(3.8))
console.log(Math.round(4.6))
console.log(Math.max(4, 8, 3))
console.log(Math.min(2, 5, 8))
console.log(Math.pow(2, 3))
console.log(Math.sqrt(16))
console.log(Math.random())
console.log(Math.random() * 9)
console.log(Math.floor(Math.random() * 9) + 1)

const dateNew = new Date();
console.log(dateNew)

const dateNew1 = new Date(2000, 11, 18, 0, 0);
console.log(dateNew1)

const dateNew2 = new Date();
console.log(dateNew2.getHours());

const today = new Date();
const birthDate = new Date(2000, 11, 18, 0, 0);
console.log(birthDate.getMonth() - today.getMonth())
