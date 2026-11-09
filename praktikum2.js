// === TUGAS 1: OUTPUT KODE AWAL ===

let siswa = ["Budi", "Ani", "Citra"];

let nilai = [
    [80, 75, 90],
    [85, 90, 95],
    [70, 80, 85]
];

console.log("=== TUGAS 1: Output Kode Awal ===");

for (let i = 0; i < siswa.length; i++) {
    let total = nilai[i][0] + nilai[i][1] + nilai[i][2];
    let rataRata = total / 3;

    console.log(
        siswa[i] + ": total " + total +
        ", rata-rata " + rataRata.toFixed(1)
    );
}


// === TUGAS 2: MENAMBAH SISWA BARU ===

siswa.push("Doni");
nilai.push([75, 85, 80]);

console.log("\n=== TUGAS 2: Menambah 1 Siswa Baru (Doni) ===");

for (let i = 0; i < siswa.length; i++) {
    let total = nilai[i][0] + nilai[i][1] + nilai[i][2];
    let rataRata = total / 3;

    console.log(
        siswa[i] + ": total " + total +
        ", rata-rata " + rataRata.toFixed(1)
    );
}


// === TUGAS 3: RATA-RATA PER MATA PELAJARAN ===

let totalMapel1 = 0;
let totalMapel2 = 0;
let totalMapel3 = 0;

for (let i = 0; i < nilai.length; i++) {
    totalMapel1 += nilai[i][0];
    totalMapel2 += nilai[i][1];
    totalMapel3 += nilai[i][2];
}

console.log("\n=== TUGAS 3: Rata-rata per Mata Pelajaran (Per Kolom) ===");
console.log("Mata Pelajaran 1: rata-rata " + (totalMapel1 / nilai.length).toFixed(1));
console.log("Mata Pelajaran 2: rata-rata " + (totalMapel2 / nilai.length).toFixed(1));
console.log("Mata Pelajaran 3: rata-rata " + (totalMapel3 / nilai.length).toFixed(1));


// === TUGAS 4: AKSES NILAI ARRAY ===

console.log("\n=== TUGAS 4: Mengakses nilai[2][1] ===");
console.log("nilai[2][1] = " + nilai[2][1]);