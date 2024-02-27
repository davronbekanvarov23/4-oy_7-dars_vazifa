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

