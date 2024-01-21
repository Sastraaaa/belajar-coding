// Soal NO 1

let nama = "sastra";
let peran = "ksatria";

if (nama.length === 0) {
  console.log("Isi nama terlebih dahulu");
} else if (peran.length === 0) {
  console.log("isi peran terlebih dahulu");
} else if (peran === "ksatria") {
  console.log(
    "Halo",
    nama,
    "dengan peran",
    peran,
    ",kamu dapat menyerang dengan senjatamu!"
  );
} else if (peran === "Tabib") {
  console.log(
    "Halo",
    nama,
    "dengan peran",
    peran,
    ",kamu akan membantu temanmu yang terluka"
  );
} else if (peran === "penyihir") {
  console.log(
    "Halo",
    nama,
    "dengan peran",
    peran,
    ",ciptakan keajaiban yang membantu kemenanganmu!"
  );
} else {
  console.log("tidak ada peran dan nama, kamu jadi NPC ajah yh");
}

// Soal No 2
let tanggal = 11;
let bulan = 5;
let tahun = 2024;

switch (bulan) {
  case 1:
    console.log(tanggal, "Januari", tahun);
    break;
  case 2:
    console.log(tanggal, "februari", tahun);
    break;
  case 3:
    console.log(tanggal, "Maret", tahun);
    break;
  case 4:
    console.log(tanggal, "April", tahun);
    break;
  case 5:
    console.log(tanggal, "Mei", tahun);
    break;
  case 6:
    console.log(tanggal, "Juni", tahun);
    break;
  case 7:
    console.log(tanggal, "Juli", tahun);
    break;
  case 8:
    console.log(tanggal, "Agustus", tahun);
    break;
  case 9:
    console.log(tanggal, "September", tahun);
    break;
  case 10:
    console.log(tanggal, "Oktober", tahun);
    break;
  case 11:
    console.log(tanggal, "November", tahun);
    break;
  case 12:
    console.log(tanggal, "Desember", tahun);
    break;
  default:
    console.log("cihuyy");
    break;
}
