// 1.1

// while (true) {
//   const input = prompt("Yoshingizni kiriting");

//   if (input === null) {
//     alert("Bekor qilindi");
//     break;
//   }

//   const age = Number(input);

//   if (isNaN(age) || age < 0) {
//     alert("Yoshingizni noto‘g‘ri kiritdingiz, qayta urinib ko‘ring");
//     continue;
//   }

//   if (age >= 18) {
//     alert("Hush kelibsiz");
//   } else {
//     alert("Sizga mumkin emas");
//   }

//   break;
// }

// 1.2

// while (true) {
//   const december = prompt("December oyini kunini tanlang");
//   if (december === null) {
//     alert("bekor qilindi");
//     break;
//   }
//   if (isNaN(december)) {
//     alert("Raqam emas! Qayta urinib ko‘ring.");
//     continue;
//   }else if(december > 31){
//     alert("Oyda faqat 31 kun mavjuddir");
//     continue;
//   }

//   let dushanba = "Dushanba";
//   let seshanba = "Seshanba";
//   let chorshanba = "Chorshanba";
//   let payshanba = "Payshanba";
//   let juma = "Juma";
//   let shanba = "Shanba";
//   let yakshanba = "Yakshanba";

//   let natija;

//   switch (december) {
//     case "1":
//     case "8":
//     case "15":
//     case "22":
//     case "29":
//       natija = dushanba;
//       break;

//     case "2":
//     case "9":
//     case "16":
//     case "23":
//     case "30":
//       natija = seshanba;
//       break;

//     case "3":
//     case "10":
//     case "17":
//     case "24":
//     case "31":
//       natija = chorshanba;
//       break;

//     case "4":
//     case "11":
//     case "18":
//     case "25":
//       natija = payshanba;
//       break;

//     case "5":
//     case "12":
//     case "19":
//     case "26":
//       natija = juma;
//       break;

//     case "6":
//     case "13":
//     case "20":
//     case "27":
//       natija = shanba;
//       break;

//     case "7":
//     case "14":
//     case "21":
//     case "28":
//       natija = yakshanba;
//       break;
//   }
//   alert("Hafta = " + natija);
//   break;
// }

// // 1

// let day1;

// do {
//   day1 = prompt("Hafta kunini yozing");

//   switch (day1) {
//     case "1":
//       alert("Dushanba");
//       day1 = "OK";
//       break;
//     case "2":
//       alert("Seshanba");
//       day1 = "OK";
//       break;
//     case "3":
//       alert("Chorshanba");
//       day1 = "OK";
//       break;
//     case "4":
//       alert("Payshanba");
//       day1 = "OK";
//       break;
//     case "5":
//       alert("Juma");
//       day1 = "OK";
//       break;
//     case "6":
//       alert("Shanba");
//       day1 = "OK";
//       break;
//     case "7":
//       alert("Yakshanba");
//       day1 = "OK";
//       break;
//     default:
//       alert("Xato, qaytadan kiriting.");
//   }
// } while (day1 !== "OK");
// // 2

// let baho;

// do {
//   baho = prompt("Bahoni kiriting");

//   switch (baho) {
//     case "1":
//       alert("Yomon");
//       baho = "OK";
//       break;
//     case "2":
//       alert("Qoniqarsiz");
//       baho = "OK";
//       break;
//     case "3":
//       alert("Qoniqarli");
//       baho = "OK";
//       break;
//     case "4":
//       alert("Yaxshi");
//       baho = "OK";
//       break;
//     case "5":
//       alert("A'lo");
//       baho = "OK";
//       break;
//     default:
//       alert("Xato, qaytadan urinib ko'ring");
//   }
// } while (baho !== "OK");

// // 3

// let month;

// do {
//   month = prompt("Oyni kiriting");
//   switch (month) {
//     case "1":
//       alert("Winter");
//       month = "OK";
//       break;

//     case "2":
//       alert("Winter");
//       month = "OK";
//       break;

//     case "3":
//       alert("Spring");
//       month = "OK";
//       break;

//     case "4":
//       alert("Spring");
//       month = "OK";
//       break;

//     case "5":
//       alert("Spring");
//       month = "OK";
//       break;

//     case "6":
//       alert("Summer");
//       month = "OK";
//       break;

//     case "7":
//       alert("Summer");
//       month = "OK";
//       break;

//     case "8":
//       alert("Summer");
//       month = "OK";
//       break;

//     case "9":
//       alert("Autumn");
//       month = "OK";
//       break;

//     case "10":
//       alert("Autumn");
//       month = "OK";
//       break;

//     case "11":
//       alert("Autumn");
//       month = "OK";
//       break;

//     case "12":
//       alert("Winter");
//       month = "OK";
//       break;

//     default:
//       alert("Xato, qaytadan kiriting");
//   }
// } while (month !== "OK");

// // 4

// let monthDays;

// do {
//   monthDays = prompt("Oyni kiriting");
//   switch (monthDays) {
//     case "1":
//       alert("Yanvar da 31 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "2":
//       alert("Fevral da 28 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "3":
//       alert("Mart da 31 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "4":
//       alert("Aprel da 30 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "5":
//       alert("May da 31 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "6":
//       alert("Iyun da 30 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "7":
//       alert("Iyul da 31 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "8":
//       alert("August da 31 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "9":
//       alert("September da 30 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "10":
//       alert("October da 31 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     case "11":
//       alert("November da 30 kun mavjuddir");
//       monthDays = "OK"
//       break;

//     case "12":
//       alert("December da 31 kun mavjuddir");
//       monthDays = "OK";
//       break;

//     default:
//       alert("Xato, qaytadan kiriting");
//   }
// } while (monthDays !== "OK");

// 5

// while (true) {
//   let a = prompt("A butun raqam kiriting");
//   if (a === null) { alert("Bekor qilindi"); break; }

//   let b = prompt("B butun raqam kiriting");
//   if (b === null) { alert("Bekor qilindi"); break; }

//   let c = prompt("1–4 gacha bo‘lgan variantni tanlang:\n1 - Qo‘shish\n2 - Ayirish\n3 - Bo‘lish\n4 - Ko‘paytirish");
//   if (c === null) { alert("Bekor qilindi"); break; }

//   a = Number(a);
//   b = Number(b);

//   if (isNaN(a) || isNaN(b)) {
//     alert("Raqam emas! Qayta urinib ko‘ring.");
//     continue;
//   }

//   let natija;

//   switch (c) {
//     case "1":
//       natija = a + b;
//       break;

//     case "2":
//       natija = a - b;
//       break;

//     case "3":
//       natija = b === 0 ? "0 ga bo‘lish mumkin emas" : a / b;
//       break;

//     case "4":
//       natija = a * b;
//       break;

//     default:
//       alert("1–4 oralig‘ida son kiriting");
//       continue;
//   }

//   alert("Natija: " + natija);
//   break;
// }

// 6

// while (true) {

//   let birinchi = prompt("1–4 oralig‘ida son kiriting"
//     +"desimetr"
//     +"kilometr"
//     +"metr"
//     +"millimeter"
//     +"santimetr");
//   if (birinchi === null) {
//     alert("Bekor qilindi");
//     break;
//   }

//   let ikkinchi = prompt("Ikkinchi raqamni kiriting ");
//   if (ikkinchi === null) {
//     alert("Bekor qilindi");
//     break;
//   }
//     if (isNaN(birinchi) || isNaN(ikkinchi)) {
//     alert("Raqam emas! Qayta urinib ko‘ring.");
//     continue;
//   }
  
//   let natija1;

//   let desimetr = 0.1;
//   let kilometr = 1000;
//   let metr = 1;
//   let millimeter = 0.001;
//   let santimetr = 0.01;


//     switch (birinchi) {
//     case "1":
//       natija1 = desimetr * ikkinchi
//       break;

//     case "2":
//       natija1 = kilometr * ikkinchi;
//       break;

//     case "3":
//       natija1 = metr * ikkinchi;
//       break;

//     case "4":
//       natija1 = millimeter * ikkinchi;
//       break;

//     case "5":
//       natija1 = santimetr * ikkinchi;
//       break;

//     default:
//       alert("1–4 oralig‘ida son kiriting");
//       continue;
//   }

//   alert("Natija: " + natija1 + " metr");
//   break;
// }

// 7

// while (true) {

//   let birinchi2 = prompt("1–4 oralig‘ida son kiriting"
//     +"kilogramm"
//     +"milligram"
//     +"gramm"
//     +"tonna"
//     +"sentner");
//   if (birinchi2 === null) {
//     alert("Bekor qilindi");
//     break;
//   }

//   let ikkinchi2 = prompt("hohlagan butun raqamingizni kiriting");
//   if (ikkinchi2 === null) {
//     alert("Bekor qilindi");
//     break;
//   }
//     if (isNaN(birinchi2) || isNaN(ikkinchi2)) {
//     alert("Raqam emas! Qayta urinib ko‘ring.");
//     continue;
//   }
  
//   let natija2;

//   let kilogramm = 1;
//   let milligram =1 / 1000000;
//   let gramm = 1 / 1000;
//   let tonna = 1000;
//   let sentner = 100;


//     switch (birinchi2) {
//     case "1":
//       natija2 = kilogramm * ikkinchi2
//       break;

//     case "2":
//       natija2 = milligram * ikkinchi2;
//       break;

//     case "3":
//       natija2 = gramm * ikkinchi2;
//       break;

//     case "4":
//       natija2 = tonna * ikkinchi2;
//       break;

//     case "5":
//       natija2 = sentner * ikkinchi2;
//       break;

//     default:
//       alert("1–4 oralig‘ida son kiriting");
//       continue;
//   }

//   alert("Natija: " + natija2 + " kg");
//   break;
// }


// 8


// let D = +prompt("Kunni kiriting");
// let M = +prompt("Oyni kiriting");

// let days = 0;

// switch (M) {
//   case 12:
//     days += 30;
//   case 11:
//     days += 31;
//   case 10:
//     days += 30;
//   case 9:
//     days += 31;
//   case 8:
//     days += 31;
//   case 7:
//     days += 30;
//   case 6:
//     days += 31;
//   case 5:
//     days += 30;
//   case 4:
//     days += 31;
//   case 3:
//     days += 28;
//   case 2:
//     days += 31;
//   case 1:
//     break;
//   default:
//     alert("Xato oy!");
// }

// days += D;

// alert("Yil boshidan beri: " + days + " kun");


// let D = +prompt("Kunni kiriting");
// let M = +prompt("Oyni kiriting");

// let days = 0;

// switch (M) {
//   case 12:
//     days += 30;
//   case 11:
//     days += 31;
//   case 10:
//     days += 30;
//   case 9:
//     days += 31;
//   case 8:
//     days += 31;
//   case 7:
//     days += 30;
//   case 6:
//     days += 31;
//   case 5:
//     days += 30;
//   case 4:
//     days += 31;
//   case 3:
//     days += 28;
//   case 2:
//     days += 31;
//   case 1:
//     break;
//   default:
//     alert("Xato oy!");
// }

// days += D + 1;

// alert("Yil boshidan beri: " + days + " kun");



// While

// 1

// // While1
// let A = parseInt(prompt("A ="));
// let B = parseInt(prompt("B ="));
// let qoldiq = A;
// while(qoldiq >= B){
//     qoldiq -= B;
// }
// console.log(qoldiq);

// // While2
// let A1 = parseInt(prompt("A1 ="));
// let B1 = parseInt(prompt("B1 ="));
// let soni = 0;
// let qoldiq1 = A1;
// while(qoldiq1 >= B1){
//     qoldiq1 -= B1;
//     soni += 1;
// }
// console.log(soni);

// // While3
// let N = parseInt(prompt("N ="));
// let K = parseInt(prompt("K ="));
// let butun = 0;
// let qoldiq2 = N;
// while(qoldiq2 >= K){
//     qoldiq2 -= K;
//     butun += 1;
// }
// console.log("Butun qism:", butun);
// console.log("Qoldiq:", qoldiq2);

// // While4
// let n1 = parseInt(prompt("n1 ="));
// let daraja = 1;
// while(daraja < n1){
//     daraja = daraja + daraja + daraja;
// }
// if(daraja === n1){
//     console.log("3 - ning darajasi");
// } else {
//     console.log("3 - ning darajasi emas");
// }

// // While5
// let n2 = parseInt(prompt("n2 ="));
// let k1 = 0;
// let daraja1 = 1;
// while(daraja1 < n2){
//     daraja1 = daraja1 + daraja1;
//     k1 += 1;
// }
// console.log(k1);

// // While6
// let n3 = parseInt(prompt("n3 ="));
// let faktorial = 1;
// let i = n3;
// while(i > 0){
//     faktorial *= i;
//     i -= 2;
// }
// console.log(faktorial);

// // While7
// let n4 = parseInt(prompt("n4 ="));
// let k2 = 1;
// while(k2 * k2 <= n4){
//     k2 += 1;
// }
// console.log(k2);

// // While8
// let n5 = parseInt(prompt("n5 ="));
// let k3 = 1;
// while((k3 + 1) * (k3 + 1) <= n5){
//     k3 += 1;
// }
// console.log(k3);

// // While9
// let n6 = parseInt(prompt("n6 ="));
// let k4 = 0;
// let daraja2 = 1;
// while(daraja2 <= n6){
//     daraja2 *= 3;
//     k4 += 1;
// }
// console.log(k4);

// // While10
// let n7 = parseInt(prompt("n7 ="));
// let k5 = 0;
// let daraja3 = 1;
// while(daraja3 * 3 <= n7){
//     daraja3 *= 3;
//     k5 += 1;
// }
// console.log(k5);

// // While11
// let n8 = parseInt(prompt("n8 ="));
// let k6 = 0;
// let yigindi = 0;
// while(yigindi < n8){
//     k6 += 1;
//     yigindi += k6;
// }
// console.log("k =", k6);
// console.log("Yig'indi =", yigindi);

// // While12
// let n9 = parseInt(prompt("n9 ="));
// let k7 = 0;
// let yigindi1 = 0;
// while(yigindi1 + k7 + 1 <= n9){
//     k7 += 1;
//     yigindi1 += k7;
// }
// console.log("k =", k7);
// console.log("Yig'indi =", yigindi1);

// // While13
// let a = parseFloat(prompt("a ="));
// let k8 = 0;
// let yigindi2 = 0.0;
// while(yigindi2 < a){
//     k8 += 1;
//     yigindi2 += 1.0 / k8;
// }
// console.log("k =", k8);
// console.log("Yig'indi =", yigindi2);

// // While14
// let a1 = parseFloat(prompt("a1 ="));
// let k9 = 0;
// let yigindi3 = 0.0;
// while(yigindi3 + 1.0 / (k9 + 1) <= a1){
//     k9 += 1;
//     yigindi3 += 1.0 / k9;
// }
// console.log("k =", k9);
// console.log("Yig'indi =", yigindi3);
