/*--------------------2-AMALIYOT-------------------------*/
/*--------------------1-MASHQ-------------------------*/

// const ism = prompt("ismni kiriting:");
// const yosh = +prompt("Yoshni kiriting:");

// let tugilganYil = "2024 - yosh";
// let oy = yosh * 12;
// let hafta = ((yosh * 365) / 7).toFixed(0);
// let kun = yosh * 365;
// let soat = kun * 24;
// let daqiqa = soat * 60;
// let soniya = daqiqa * 60;

// const result = `Qadirli ${ism}, Siz ${tugilganYil} yilda tug'ilgansiz.Va siz${oy} oy, ${hafta} hafta, ${kun}kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz.😊 `;

// alert(result);

/*--------------------2-MASHQ-------------------------*/

// const ism=prompt('Ism kiriting')
// const ismlar=('Shohruh','Sardor','Davron')

// if(ismlar.includes(ism)){
//     alert(`Ha ${ism} bor`)
// }
// else{alert(`Afsus ${ism} yo'q`)}

/*--------------------3-MASHQ-------------------------*/

// const ismlar = ["Shohruh", "Sardor", "Davron"];

// // FOR bilan

// // for (let i = 0; i < ismlar.length; i++) {
// //   let result = ismlar[i] + "bek";
// //   console.log(result);
// // }

// let i = 0;

// while (i < ismlar.length) {
//   let result = ismlar[i] + "bek";
//   console.log(result);
//   i++;
// }

/*--------------------4-MASHQ-------------------------*/

// const viloyatNomi = prompt("Qaysi viloyat kerak ?");

// SWITCH CASE bilan

// switch (viloyatNomi) {
//   case "Farg'ona":
//     alert("Farg'ona viloyatida 2mln aholi bor");
//     break;
//   case "Andijon":
//     alert("Andijon viloyatida 1.5mln aholi bor");
//     break;
//   case "Namangan":
//     alert("Namangan viloyatida 1mln aholi bor");
//     break;
//     default:alert(`Hozircha ba'zada ${viloyatNomi} viloyat mavjud emas`)
// }

// IF bilan

// if (viloyatNomi == "Farg'ona") {
//   alert("Farg'ona viloyatida 2mln aholi bor");
// } else if (viloyatNomi == "Andijon") {
//   alert("Andijon viloyatida 1.5mln aholi bor");
// } else if (viloyatNomi == "Namangan") {
//   alert("Namangan viloyatida 1mln aholi bor");
// } else {
//   alert(`Hozircha ba'zada ${viloyatNomi} viloyat mavjud emas`);
// }

/*--------------------5-MASHQ-------------------------*

// const belgilar = prompt("nimadurlar yozing....😊");

// let meyor = 15;

// if (belgilar.length > meyor) {
//   alert(
//     `Siz ${meyor}ta belgi kiritishingiz mumkin, lekin hozirda siz ${
//       belgilar.length
//     }ta belgi kiritdingiz.Bu meyoridan  ${belgilar.length - meyor}ta ko'p  `
//   );
// } else {
//   alert(
//     `Siz ${meyor}ta belgi kiritishingiz mumkin, lekin hozirda siz ${
//       belgilar.length
//     }ta belgi kiritdingiz.Bu meyoridan  ${meyor - belgilar.length}ta kam  `
//   );
// }

/*--------------------3-AMALIYOT-------------------------*/

/*--------------------1-MASHQ-------------------------*/

// const myArrey = [[false, true], [1, 2], 99, "yaxshi"];

// for
// for (let i = 0; i < myArrey.length; i++) {
//   if (typeof myArrey[i] == "string") {
//     console.log("String index:", i);
//   }
// }

// myArrey.forEach((item, i) => {
//   if (typeof item[i] == "string") {
//     console.log("String index:", i);
//   }
// });

/*--------------------2-MASHQ-------------------------*/

// const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
// const newData = [];
// data.forEach((item) => {
//   const res = Array.isArray(item);
//   if (res) {
//     item.forEach((num) => {
//       newData.push(num);
//     });
//   }
// });

// console.log(newData);

/*--------------------3-MASHQ-------------------------*/

// const checkData = [null, "false", 0, 99, false, undefined, "", NaN, "0"];
// const falsey = [];

// checkData.forEach((item) => {
//   if (!item) {
//     falsey.push(item);
//   }
// });
// console.log(falsey);

/*--------------------4-MASHQ-------------------------*/
// 1-usul
// const word = "Samarqand";
// const splitWord = word.split("").reverse();
// let newWord = "";
// for (let i = 0; i < splitWord.length; i++) {
//   newWord += splitWord[i];
// }
// console.log(newWord);

// FOREACH

// const word = "Samarqand";
// const splitWord = word.split("").reverse();
// let newWord = [];
// splitWord.forEach((item) => {
//   newWord.push(item);
// });
// console.log(newWord);

// 2-usul
// const word = "samarqand";
// const splitWord = word.split("");
// let newWord = "";

// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += splitWord[i];
// }
// console.log(newWord);

/*--------------------5-MASHQ-------------------------*/

// const word = prompt("Biror gap kiriting")
// const splitWord = word.split(" ");
// let newWord = "";

// splitWord.forEach((item) => {
//   const boshi = item.charAt().toLowerCase();
//   const davomi = item.slice(1).toLocaleUpperCase();
//   newWord += " " + boshi + davomi;
// });

// console.log(newWord.trimStart());

/*--------------------6-MASHQ-------------------------*/

// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9];
// let naturalNumbers = 0;
// numbers.forEach((num) => {
//   if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//     naturalNumbers += num;
//   }
// });

// console.log(naturalNumbers);

/*--------------------7-MASHQ-------------------------*/

// const words = "Qalesiz yaxshimisz ? Yaxshimi ishlar ?";
// let splitWords = words.split("");
// let counter=0
// splitWords.forEach((word) => {
//   if (word == "a" || word == "A") {
//     counter++;
//   }
// });

// console.log(`so'ralayotgan harf: ${counter}marta ishtirok etgan.`)

/*--------------------8-MASHQ-------------------------*/

// const types = [21.1, "Robiya", "array", ["I am array"], null, true, 214];
// const newTypes = [];

// types.forEach((type) => {
//   newTypes.push(typeof type);
// });
//  console.log(newTypes)

/*--------------------9-MASHQ-------------------------*/
// const word = "Uzbekiston";
// console.log(word.lastIndexOf(word.slice(-1))+1);

/*--------------------10-MASHQ-------------------------*/
// const numbers=[1,2,3,4,5]
// let result=[]
// numbers.forEach((num,i)=>{result.push(num+i)})
// console.log(result)

/*--------------------11-MASHQ-------------------------*/

// let counter = 0;

// for (let i = 1; i <= 10; i++) {
//   counter += i;
// }
// console.log(counter);

/*--------------------12-MASHQ-------------------------*/

// const number=+prompt('sonni kiriting')

// for (let i = 1; i <= 10; i++) {
//   let result = number * i + 1;
//   alert(result);
// }

/*--------------------13-MASHQ-------------------------*/

// let numbers = [1, 2, 3, 4, 5];
// let result = [];

// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     result.push(num * -1);
//   });
// };
// reverseFunc(numbers)
// console.log(result)

/*--------------------14-MASHQ-------------------------*/

// const result = [];

// const fizzbuzzFanc = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push("fizzBuzz");
//     } else if (i % 5 == 0) {
//       result.push("Buzz");
//     } else if (i % 3 == 0) {
//       result.push("Fizz");
//     } else {
//       result.push(i);
//     }
//   }
// };
// fizzbuzzFanc(100);
// console.log(result);

/*--------------------15-MASHQ-------------------------*/

const Davronbekobj = {
  name: "Davronbek",
  LastName: "Anvarov",
  age: 22,
  region: "Fergana",
  isMerried: false,
  job: "Bugalter",
  haqida: function () {
    return `Assalomu alaykum,Mening ismim ${this.name},Familiyam ${
      this.LastName
    }.Yoshim ${this.age}da,${this.region}da yashayman.${
      this.job
    } bo'lib  ishlayman.${
      this.isMerried ? "Uylanganman" : "Hali uylanmaganman"
    }`;
  },
};
let result = Davronbekobj.haqida();
console.log(result);
