// const xhr = new XMLHttpRequest;

// document.querySelector(".btn").addEventListener("click", function() {
//   xhr.open("GET", "sample.text", true);
//   xhr.onload = function() {
//     if (this.status === 200) {
//       document.querySelector(".output").innerHTML = this.responseText;
//     }
//   }
//   xhr.send();
// });

// document.querySelector(".btn").addEventListener("click", function() {
//   xhr.open("GET", "person.json", true);
//   xhr.onload = function() {
//     if (this.status === 200) {
//       const person = JSON.parse(this.responseText);
//       let output = `
//       <ul>
//         <li>${person.name}</li>
//         <li>${person.surname}</li>
//         <li>${person.city}</li>
//         </ul>
//       `
     
//       document.querySelector(".output").innerHTML = output;
//     }
//   }
//   xhr.send();
// });

// const person = new Promise((resolve, reject) => {
//   const bub = true;
//   if (!bub) {
//     resolve("Wszestko Ok");
//   } else {
//     reject("Coś poszło nie tak");
//   }
  
  
// });;

// person.then(sum => {
//   console.log(sum);
// }).catch(err => {
//   console.log(err);
// });

// fetch("sample.text")
//   .then(result => result.text())
//   .then(sum => console.log(sum));