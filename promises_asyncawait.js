console.log("1.log")

const promiseFunc = (text) => {
  return new Promise((resolve, reject) => {
    let settings = true;
    setTimeout(() => {
      if (settings) resolve(text)
      reject(new Error("Hatalı işlem... "))
    }, 2000);
  })
}

promiseFunc("2. log promise işlemi ile 2 saniye sonra gönderdi...")
  .then((pr) => console.log(pr))
  .catch((err) => console.log(err))

Promise.all([
  promiseFunc("2.log promise.all ile ekrana bastırıldı...")
])
  .then((pr) => console.log(pr))
  .catch((err) => console.log(err))

console.log("3.log")

const fetchData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  let data = await response.json()
  return data
}

fetchData()
  .then((data) => console.log(data))
