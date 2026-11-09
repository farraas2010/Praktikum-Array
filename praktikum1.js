// === HASIL TUGAS 1 ===

let nilai = [85, 90, 78, 92, 88];

let total = 0;
let tertinggi = nilai[0];
let terendah = nilai[0];

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];

    if (nilai[i] > tertinggi) {
        tertinggi = nilai[i];
    }

    if (nilai[i] < terendah) {
        terendah = nilai[i];
    }
}

let rataRata = total / nilai.length;

console.log("=== HASIL TUGAS 1 ===");
console.log("Daftar Nilai: [ " + nilai.join(", ") + " ]");
console.log("Total Nilai: " + total);
console.log("Rata-rata Nilai: " + rataRata);
console.log("Nilai Tertinggi: " + tertinggi);
console.log("Nilai Terendah: " + terendah);


// === HASIL TUGAS 2 ===

let campuran = ["Budi", 16, true, 3.5];

console.log("\n=== HASIL TUGAS 2 ===");

for (let i = 0; i < campuran.length; i++) {
    console.log(campuran[i] + " -> tipe data: " + typeof campuran[i]);
}