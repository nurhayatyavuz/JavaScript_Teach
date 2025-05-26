console.log("first");

let sayi1 = 8;
let sayi2 = 10;
let toplam = sayi1 + sayi2;
console.log(toplam, "sayilarin toplamı");
console.log(typeof toplam, "sayiların türü");

let sayi3 = "6";
let toplam2 = sayi1 + sayi3;
console.log(toplam2, "bir number ve bir stringin toplamı?"
);
console.log(typeof toplam2);

let toplam3 = sayi1 + Number(sayi3);

let esitlik = sayi1 === sayi3;
console.log(esitlik, "sayi1 ve sayi3 eşit mi?");

const info = {
  name: "nurhayat",
  surname: "yavuz",
  age: "23"
};
console.log(info);
console.log(info.name);

const arr = ["1", "2", "3", "4"];
console.log(arr[0]);

function firstFunc() {
  console.log("fonksiyon");
}
firstFunc();

const secondFunc = () => {
  console.log("arrow function");
};
secondFunc();

let sayi4 = 20;
let sayi5 = 10;

const sum = (num1, num2) => {
  return num1 + num2;
};

let res = sum(sayi4, sayi5);
console.log(res);

function hello() {
  console.log("selams");
  console.log(this.name + this.val);
}

const obj = { name: "js", val: "20" };
hello.call(obj);

function total(a, b) {
  return a + b;
}

const args = [3, 4];
let sonuc = total.apply(null, args);
console.log(sonuc, "toplam sonuç");
