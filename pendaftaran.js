document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Lakukan validasi data, misalnya cek apakah field kosong atau password cukup panjang

    // Contoh validasi sederhana
    if (username === "" || password === "" || email === "") {
        document.getElementById("message").textContent = "Harap lengkapi semua field.";
        return;
    }

    // Jika data valid, Anda bisa melakukan pengiriman data ke server atau tindakan lainnya
    // Di sini Anda bisa menggunakan AJAX atau FormData untuk mengirim data ke server

    // Contoh tindakan setelah sukses
    document.getElementById("message").textContent = "Registrasi berhasil!";
});
