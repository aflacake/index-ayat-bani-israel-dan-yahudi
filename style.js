const tabelJudul = document.getElementById("judulTabelAyat");
tabelJudul.style.borderCollapse = "collapse";

const thsJud = tabelJudul.getElementsByTagName("th");
for (let th of thsJud) {
    th.style.border = "2px inset #666";
    th.style.padding = "8px";
    th.style.backgroundColor = "#eee";
    
}


const tdsJud = tabelJudul.getElementsByTagName("td");
for (let td of tdsJud) {
    td.style.border = "2px inset #999";
    td.style.padding = "8px";
    
}


const tabel = document.getElementById("tabelAyat");
tabel.style.borderCollapse = "collapse";

const ths = tabel.getElementsByTagName("th");
for (let th of ths) {
    th.style.border = "2px inset #666";
    th.style.padding = "8px";
    th.style.backgroundColor = "#eee";
    
}


const tds = tabel.getElementsByTagName("td");
for (let td of tds) {
    td.style.border = "2px inset #999";
    td.style.padding = "8px";
    
}


const deskripsi = document.getElementById("deskripsi");
deskripsi.textContent = "Aplikasi web sederhana yang menampilkan daftar ayat-ayat Al-Qur'an yang berkaitan dengan Bani Israil dan Yahudi. Pengguna dapat dengan mudah mencari ayat berdasarkan nama surah, ringkasan, atau isi teks ayat. Fitur tampilan teks lengkap memudahkan pengguna untuk membaca ayat. Aplikasi web ringan dan mudah diakses di berbabagai perangkat, aplikasi cocok sebagai alat belajar dan kajian Al-Qur'an khususnya tema Bani Israil dan Yahudi."


const style = document.createElement("style");
style.textContent = `
    body {
        padding: 0;
        margin: 0;
    }

    h1 {
       margin: 20px;
    }

    #inputCari {
        padding: 10px;
        margin: 20px;
    }

    #judulTabelAyat {
        margin: 20px;
    }

    #ayatTeksPenuh {
        margin: 20px;
    }

    #deskripsi {
        padding: 8px 12px;
        margin: 20px;
        border: 2px inset #666;
        
    }
`;
document.head.appendChild(style);
