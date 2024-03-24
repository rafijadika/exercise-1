function show() {
    var result = confirm(". Apakah Anda ingin melanjutkan?");
    if (result == true) {
        // Buka link umum yang diinginkan
        var linkUmum = "https://www.rockstargames.com/newswire/article/ak759k91592728/gta-online-the-contract-out-now"; // Ganti dengan URL yang diinginkan
        window.open(linkUmum, "_blank");
    } else {
        // Kode untuk jika pengguna menekan Cancel
    }
}

const images = ['image 1.jpg', 'image 2.jpg', 'image 3.jpg']; // List of image filenames
let currentIndex = 0;

function slide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('slider').src = images[currentIndex];
}

setInterval(slide, 5000); // Change image every 2 seconds


// Panggil fungsi updateClock setiap 1 detik (1000 milidetik)
setInterval(updateClock, 1000);

// Panggil updateClock() agar waktu ditampilkan sesaat setelah halaman dimuat
updateClock();