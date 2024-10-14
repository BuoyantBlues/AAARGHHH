var KelasNum = 1,
  KelasLim = 3,
  KelasNet = 7,
  KelasRep = 4;

for (; KelasNum <= KelasNet; KelasNum++) {
  if (KelasNum <= KelasLim) {
    document.write(`Speaker pada kelas XII-${KelasNum} berfungsi <br>`);
  } else if (KelasNum === KelasRep) {
    document.write(`Speaker pada kelas XII-${KelasNum} sedang perbaikan <br>`);
  } else {
    document.write(`Speaker pada kelas XII-${KelasNum} tidak berfungsi <br>`);
  }
}

// alas = prompt(`Masukkan Alas:`);
// tinggi = prompt(`Masukkan Tinggi:`);
// LuasSegitiga = (alas * tinggi) / 2;
// document.write(LuasSegitiga);

// let num = parseInt(prompt(`Masukkan angka: `));

// if (num % 2 === 0) {
//   alert(`${num} adalah bilangan GENAP`);
// } else {
//   alert(`${num} adalah bilangan GANJIL`);
// }

// let grade = prompt(`Masukkan nilai Anda = `);

// if (grade >= 85) {
//   console.log(`A`);
// } else if (grade >= 70) {
//   console.log(`B`);
// } else if (grade >= 55) {
//   console.log(`C`);
// } else {
//   console.log(`D`);
// }
