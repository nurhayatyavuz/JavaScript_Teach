var cars = { make: "mini", modal: "cooper D" };
var jsonStr = JSON.stringify(cars);
console.log(jsonStr, "JSON'a dönüştü");
console.log(JSON.parse(jsonStr), "JavaScript'e dönüştü");

var modal = "yaris";
var cars1 = { make: "TOYOTA", [modal]: "corolla" };
console.log(cars1);

var hasName = cars.hasOwnProperty("make");
console.log(hasName);

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 2, c: 4 };
var merged = Object.assign({}, obj1, obj2);
console.log(merged);
