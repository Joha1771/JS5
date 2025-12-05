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

