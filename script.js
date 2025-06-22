document.addEventListener('DOMContentLoaded', function () {
const hari = document.getElementById("hari");
const jamSekarang = document.getElementById("jam");

const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
];

function perbaruiWaktu() {
    const sekarang = new Date();
    const hariIni = sekarang.getDay();
    const jam = sekarang.getHours();
    const menit = sekarang.getMinutes().toString().padStart(2, '0');

    if ((hariIni === 5 && jam >= 18) || (hariIni === 6 && jam < 18)) {
        hari.textContent = "Hari Sabat";
    } else {
        hari.textContent = "Hari " + namaHari[hariIni];
    }
    jamSekarang.textContent = `${jam}:${menit}`;
}
perbaruiWaktu();
setInterval(perbaruiWaktu, 1000);



function menghilangkanBouncing(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const dataAyat = [
    {
        no: 1,
        surah: "Al-Baqarah",
        ayat: 47,
        ringkasan: "Peringatan kepada Bani Israil tentang nikmat Allah",
        teks: "Wahai Bani Israil! Ingatlah nikmat-Ku yang telah Aku anugerahkan kepadamu dan bahwa Aku telah melebihkan kamu di atas segala umat"
    },
    {
        no: 2,
        surah: "Al-Baqarah",
        ayat: 61,
        ringkasan: "Keluhan Bani Israil terhadap makanan yang diberikan dan pembangkangan mereka",
        teks: "Dan (ingatlah) ketika kamu berkata: 'Wahai Musa, kami tidak tahan (hanya) dengan satu macam makanan saja..."
    },
    {
        no: 3,
        surah: "Al-Baqarah",
        ayat: 75,
        ringkasan: "Sebagian Bani Israel mengubah isi kitab setelah memahaminya",
        teks: "Apakah kamu masih mengharapkan mereka akan percaya kepadamu, padahal segolongan dari mereka mendengar firman Allah lalu mengubahnya..."
    },
    {
        no: 4,
        surah: "Al-Baqarah",
        ayat: 88,
        ringkasan: "Sikap keras kepala Bani Israil dan penolakan terhadap kebenaran",
        teks: "Mereka berkata, 'Hati kami tertutup.' Padahal sebenarnya Allah telah melaknat mereka karena kekafiran mereka..."
    },
    {
        no: 5,
        surah: "Al-Baqarah",
        ayat: 120,
        ringkasan: "Orang-orang Yahudi dan Nasrani tidak akan pernah ridha hingga umat Islam mengikuti agama mereka",
        teks: "Orang-orang Yahudi dan Nasrani tidak akan senang kepadamu hingga kamu mengikuti agama mereka..."
    },
    {
        no: 6,
        surah: "Al-Ma'idah",
        ayat: 44,
        ringkasan: "Taurat diturunkan sebagai petunjuk",
        teks: "Sesungguhnya Kami menurunkan Taurat, di dalamnya ada petunjuk dan cahaya..."
    },
    {
        no: 7,
        surah: "Al-Ma'idah",
        ayat: 64,
        ringkasan: "Orang Yahudi berkata tangan Allah terbelenggu - celaan dan kutukan dari Allah atas ucapan mereka",
        teks: "Orang-orang Yahudi berkata, 'Tangan Allah Terbelenggu.' Padahal tangan-Nya terbuka, Dia memberi rezeki sebagaimana Dia kehendaki..."
    },
    {
        no: 8,
        surah: "Al-Jumu'ah",
        ayat: 5,
        ringkasan: "Perumpamaan orang yang memikul Taurat tetapi tidak mengamalkannya",
        teks: "Perumpamaan orang-orang yang dipikulkan kepadanya Taurat, kemudian mereka tidak memikulnya..."
    },
    {
        no: 9,
        surah: "An-Nisa",
        ayat: 46,
        ringkasan: "Orang Yahudi memelintir kata-kata dalam kitab dan mengejek Nabi",
        teks: "Di antara orang-orang Yahudi ada yang mengubah perkataan dari tempat-tempatnya dan mengatakan, 'Kami dengar tetapi kami tidak mau menurutinya..."
    },
    {
        no: 10,
        surah: "Ali 'Imran",
        ayat: 112,
        ringkasan: "Orang-orang Yahudi ditimpa kehinaan dan kemurkaan karena menolak ayat-ayat Allah dan membunuh nabi-nabi",
        teks: "Mereka ditimpa kehinaan di mana saja mereka berada, kecuali bila berpegang pada tali Allah dan tali manusia..."
    },
    {
        no: 11,
        surah: "Al-Ma'idah",
        ayat: 66,
        ringkasan: "Orang Yahudi ada termasuk golongan pertengahan",
        teks: "Diantara mereka ada golongan yang pertengahan..."
    },
    {
        no: 12,
        surah: "Ali 'Imran",
        ayat: 199,
        ringkasan: "Ahli Kitab beriman kepada Allah",
        teks: "Sesunggunya diantara Ahli Kitab itu, ada yang beriman kepada Allah dan kepada apa yang diturunkan kepadamu dan kepada apa yang telah diturunkan kepada mereka..."
    },
    {
        no: 13,
        surah: "As-Saffat",
        ayat: 123,
        ringkasan: "Nabi Ilyas termasuk rasul yang diutus Allah",
        teks: "Dan sesungguhnya Ilyas benar-benar termasuk salah seorang rasul."
    },
    {
        no: 14,
        surah: "As-Saffat",
        ayat: 124,
        ringkasan: "Nabi Ilyas menyeru kaumnya agar bertakwa",
        teks: "Ketika dia berkata kepada kaumnya: 'Mengapa kamu tidak bertakwa?'"
    },
    {
        no: 15,
        surah: "As-Saffat",
        ayat: 125,
        ringkasan: "Kaum Nabi Ilyas menyembah Ba'al dan meninggalkan Allah",
        teks: "Apakah kamu menyeru Ba'al dan meninggalkan (Allah) sebaik-baik Pencipta?"
    },
    {
        no: 16,
        surah: "As-Saffat",
        ayat: 130,
        ringkasan: "Kesejahteraan atas Ilyas",
        teks: "Kesejahteraan dilimpahkan atas Ilyas."
    }
];



const dataArtikel = [
    {
        id: 1,
        judul: "Perilaku Bani Israel dalam Al-Qur'an",
        isi: "Bani Israil sering kali digambarkan kaum yang menerima banyak nikmat, namun tetap membangkang perintah Allah. Ada sisi positif maupun negatif dari Bani Israel agar Umat Islam dapat mengambil hikmah dan tidak mengulangi kesalahan yang sama lagi. Seperti perilaku positifnya: menepati janji dan beriman seperti dalam surat Al-Maidah: 66 dan bersabar dari penderitaan sepeerti dalam surat Al-Qashash: 5.",
        keyword: "bani israil"
    },
    {
        id: 2,
        judul: "Pandangan Al-Qur'an terhadap Yahudi",
        isi: "Al-Qur'an menyebut kaum Yahudi dalam konteks sejarah dan ajaran. Beberapa ayat menyoroti penyimpangan dari Taurat. Kaum Yahudi disampaikan dalam berbagai ayat mengandung kritik, sejarah, keadlian juga, namun bukan kebencian terhadap identitas secara menyeluruh. Al-Qur'an menyebut mereka Ahli Kitab dan penyampaikan kritik atas sikap-sikap tertentu, bukan menyamaratakan.",
        keyword: "yahudi"
    },
    {
        id: 3,
        judul: "Perbedaan Yahudi dan Bani Israil dalam Al-Qur'an",
        isi: "Istilah 'Bani Israil' dalam Al-Qur'an merujuk pada keturunan Nabi Ya'qub dan lebih mencerminkan identitas etnis-historis. Sedangkan 'Yahudi' seringkali digunakan untuk menyebut kelompok yang mengikuti ajaran Taurat tetapi juga terlibat dalam penyimpangan tertentu, kata 'Yahudi' muncul di Al-Qur'an setelah perpecahan Bani Israel yaitu mereka diasingkan. Al-Qur'an membedakan antara keduanya, walau seringkali terkait. Penting untuk memahami konteks istilah ini agar tidak salah dalam memaknai ayat-ayat yang berkaitan.",
        keyword: "yahudi, bani israil"
    },
    {
        id: 4,
        judul: "Ahli Kitab: Musuh atau Saudara dalam Dialog?",
        isi: "Sumber ini berasal dari Tafsir Al-Misbah, Tafsir Al-Ahzar, atau Ibnu Katsir. Penjelasan ini mencakup 'Ahli Kitab' dalam Yahudi seperti jangan berdebat kasar dengan Ahli Kitab, ada dalam Q.S Al-Ankabut: 46. Perintah untuk berdialog dengan baik. Fakta sejarah juga bahwa Nabi Muhammad SAW menerima tamu dari kaum Nasrani dan Yahudi di Madinah.",
        keyword: "yahudi, ahli kitab"
    },
    {
        id: 5,
        judul: "Kisah Nabi Ilyas dalam Al-Qur'an",
        isi: "Nabi Ilyas adalah seorang nabi yang disebutkan dalam Al-Qur'an. Ia ditus kepada kaum yang menyembah berhala bernama Ba'al. Nabi Ilyas menyeru kepada Bani Israil agar kembali menyebah kepada Allah SWT. Kisah Nabi Ilyas tercatat dalam Q.S As-Saffat: 123-130. Allah menyanjung Nabi Ilyas sebagai salah satu Rasul-Nya yang mulia, dan memberinya kesejahteraan.",
        keyword: "nabi ilyas"
    },
    {
        id: 6,
        judul: "Nabi Ilyas dan Doa untuk Kaumnya",
        isi: "Walaupun ditolak oleh kaumnya, Nabi Ilyas tetap mendoakan mereka agar mendapatkan hidayah. Hal ini menunjukkan sifat rahmat Nabi Ilyas kepada umatnya, sebagaimana nabi-nabi lainnya. Allah kemudian mengangkat Nabi Ilyas sebagai salah satu nabi yang dimuliakan.",
        keyword: "nabi ilyas, doa, rahmat"
    },
    {
        id: 7,
        judul: "Pelajaran Tauhid dari kisah Nabi Ilyas",
        isi: "Kisah Nabi Ilyas dalam Al-Qur'an mengandung pelajaran penting tentang tauhid. Ia menghadapi kaum yang menolak Allah dan menyambah berhala bernama Ba'al. Keberanian Nabi Ilyas dalam berdakwah meskipun ditolak menunjukkan bahwa tauhid harus ditegakkan walau dalam tekanan. Ini menjadi teladan bagi umat Islam menjaga akidah.",
        keyword: "tauhid, nabi ilyas, dakwah"   
    }
]



function menyorot(teks, katakunci) {
    if (!katakunci) return teks;
    const katakunciLolos = katakunci.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const ekspresiReguler = new RegExp(`(${katakunciLolos})`, 'gi');
    return teks.replace(ekspresiReguler, '<b>$1</b>');
}


const badanTabel = document.getElementById("tabelAyat");
const teksPenuhDiv = document.getElementById("ayatTeksPenuh");
let katakunciSaatIni = "";
const jumlahHasil = document.getElementById("jumlahHasil");

function renderTabel(dataTerfilter) {
    badanTabel.innerHTML = "";
    dataTerfilter.forEach((ayat) => {
        const baris = document.createElement("tr");
        baris.innerHTML = `
            <td>${ayat.no}</td>
            <td>${ayat.surah}</td>
            <td>${ayat.ayat}</td>
            <td>${menyorot(ayat.ringkasan, katakunciSaatIni)}</td>
            <td><button onclick="tampilkanTeks(${ayat.no})">Lihat Teks</button></td>
        `;
        badanTabel.appendChild(baris);
    });
}

window.tampilkanTeks = function(no) {
    const ayat = dataAyat.find(a => a.no === no);
    const teksDisorot = menyorot(ayat.teks, katakunciSaatIni);
    teksPenuhDiv.innerHTML = `<strong>${ayat.surah} : ${ayat.ayat}</strong><p>${teksDisorot}</p>`;

    teksPenuhDiv.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}



function tampilkanArtikelKhusus(kataKunci) {
    const hasilArtikel = document.getElementById("artikel");
    hasilArtikel.innerHTML = "";

    const hasil = dataArtikel.filter((artikel) => 
        artikel.judul.toLowerCase().includes(kataKunci) ||
        artikel.isi.toLowerCase().includes(kataKunci) ||
        artikel.keyword.toLowerCase().includes(kataKunci)
    );

    if (kataKunci.trim() !== "") {
        hasilArtikel.innerHTML += `<p><em>Ditemukan ${hasil.length} artikel relevan</em></p>`;
    }

    hasil.forEach((artikel) => {
        const divArtikel = document.createElement("div");
        divArtikel.className = "artikel";
        divArtikel.innerHTML = `
            <h3>${artikel.judul}</h3>
            <p>${menyorot(artikel.isi, katakunciSaatIni)}</p>
        `;
         hasilArtikel.appendChild(divArtikel);
    });
}


function tampilkanPesanAwal() {
    badanTabel.innerHTML = `
        <tr>
            <td colspan="5" style="text-align: center;">Silahkan cari di pencarian untuk mendapatkan hasil</td>
        </tr>
    `;
    document.getElementById("judulTabelAyat").style.display = "table";
    jumlahHasil.innerHTML = "";

    const hasilArtikel = document.getElementById("artikel");
    hasilArtikel.innerHTML = `<p>Silahkan cari di pencarian untuk mendapatkan hasil</p>`
}
window.onload = function () {
    tampilkanPesanAwal();
};


function scrollKeHasil() {
    const target = document.getElementById("jumlahHasil");
    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


function cariAyat() {
    const pertanyaan = document.getElementById("inputCari").value.toLowerCase();
    const tabel = document.getElementById("judulTabelAyat");
    const hasilArtikelTabel = document.getElementById("hasilArtikel");
    hasilArtikelTabel.innerHTML = "";
    katakunciSaatIni = pertanyaan;

    const terfilter = dataAyat.filter((ayat) =>
        ayat.surah.toLowerCase().includes(pertanyaan) ||
        ayat.ringkasan.toLowerCase().includes(pertanyaan) ||
        ayat.teks.toLowerCase().includes(pertanyaan)
    );

    if (pertanyaan.trim() === "") {
        tampilkanPesanAwal();
        jumlahHasil.innerHTML = "";
        tabel.style.display = "table";
        return;
    }

    if (terfilter.length === 0) {
        jumlahHasil.innerHTML = `Tidak ditemukan hasil untuk: "<em>${pertanyaan}</em>"`;
        badanTabel.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center;">Tidak ditemukan hasil untuk pencarian tersebut</td>
                </tr>
            `;
        tabel.style.display = "table";

    } else {
        jumlahHasil.innerHTML = `Ditemukan <strong>${terfilter.length}</strong> ayat untuk: "<em>${pertanyaan}</em>"`
        tabel.style.display = "table";
        renderTabel(terfilter);
        scrollKeHasil();
    }
    tampilkanArtikelKhusus(pertanyaan);
}

document.getElementById("inputCari").addEventListener("keyup", menghilangkanBouncing(cariAyat, 1000));
});
