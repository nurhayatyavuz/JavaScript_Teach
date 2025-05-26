console.log("İNDEX2 DERSLERİ BAŞLIYOR >> Array Metodları");

let fruits = ["apple", "banana", "pineapple"];
console.log(fruits);

// Eleman ekleme ve silme işlemleri
fruits.push("watermelon"); // Sona eleman ekle
console.log(fruits);

fruits.pop(); // Sondaki elemanı sil
console.log(fruits);

fruits.unshift("orange"); // Başa eleman ekle
console.log(fruits);

fruits.shift(); // Baştaki elemanı sil
console.log(fruits);

// Array birleştirme
let colors = ["pink", "purple"];
let combined = fruits.concat(colors);
console.log(combined);

// Belirli aralıktaki elemanları alma
console.log(combined.slice(1, 3)); // 1 dahil, 3 hariç
console.log(combined.splice(1, 3)); // 1'den başlayarak 3 eleman sil ve döndür

// Filtreleme işlemleri
let filteredFruits = fruits.filter(fruit => fruit === "apple");
console.log(filteredFruits, "filtreleme sonucu");

let foundFruit = fruits.find(fruit => fruit === "apple");
console.log(foundFruit, "(find işlemi sonucu)");

// Sayılar üzerinde işlemler
let numbers = [2, 3, 8, 5, 1, 7];

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers, "2'ye tam bölünen sayılar");

let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers, "2 ile çarpılmış sayılar");

let total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total, "sayıların toplamı");

// Bazı/Hepsi kontrolü
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven, "en az bir çift sayı var mı?");

let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven, "tüm sayılar çift mi?");

// Döngü ile her elemanı gezme
numbers.forEach(num => console.log(num));

// Sıralama işlemleri
let ascending = [...numbers].sort((a, b) => a - b);
console.log(ascending, "küçükten büyüğe sıralama");

let descending = [...numbers].sort((a, b) => b - a);
console.log(descending, "büyükten küçüğe sıralama");

let reversedFruits = [...fruits].reverse();
console.log(reversedFruits, "meyvelerin ters sıralanmış hali");
