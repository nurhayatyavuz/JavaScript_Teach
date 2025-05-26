console.log("OBJELER KONUSU >>>");

const featured = {
  name: "ram",
  class: 10
};
console.log(featured.name + featured.class);
console.log(featured["name"]);

const featured2 = {
  name: "ram2",
  class: 20,
  marks: {
    science: "computer",
    feature: false
  }
};
console.log(featured2.marks);
console.log(featured2.marks.science);

const featured3 = {
  name: "ram3",
  class: 30,
  greet: function() {
    console.log("obje içinde function açma...");
  }
};
console.log(featured3.greet);
console.log(featured3.greet());

let student = {};
student.name = "JS";
console.log(student);

function Person() {
  this.name = "javaScript";
  this.val = 15;
}
const person = new Person();
console.log(person);
console.log(person.name);

function Person2(name, val) {
  this.name = name;
  this.val = val;
}
const person2 = new Person2("JavaScript2", 20);
console.log(person2);

var defaults = { theme: "light", fontSize: 14 };
var userSet = { fontSize: 17 };
var compObj = { ...defaults, userSet };
console.log(compObj);

var person3 = { name: "ali", age: "13" };
for (var key in person3) {
  console.log(key, person3[key]);
}

var person4 = {};
Object.defineProperty(person4, "age", {
  value: 30,
  writable: false,
  configurable: false
});
console.log(person4);

var user2 = { name3: "javaScript" };
user2.name3 = "JavaScript1";
console.log(user2);
Object.freeze(user2);
user2.name3 = "değiştirmeyi deniyorum.";
console.log(user2);

var cars = { make: "mini", model: "cooperD" };
var keys = Object.keys(cars);
console.log(keys);
var values = Object.values(cars);
console.log(values);
var entries = Object.entries(cars);
console.log(entries);

Object.seal(cars);
cars.model = "CooperS";
console.log(cars);
