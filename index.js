function hitungHari() {
    const inputTanggalLahir = document.getElementById("input").value;
    const tanggalLahir = new Date(inputTanggalLahir);
    const hariIni = new Date();
    const selisihWaktu = hariIni - tanggalLahir;
    const selisihHari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
  
    const hasil = document.getElementById("output");
    hasil.innerHTML = "Waktu yang telah berlalu: " + selisihHari + " hari" ;
  }