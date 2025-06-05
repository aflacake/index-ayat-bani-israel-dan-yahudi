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
    }
];



const dataArtikel = [
    {
        id: 1,
        judul: "Perilaku Bani Israel dalam Al-Qur'an",
        isi: "Bani Israil sering kali digambarkan kaum yang menerima banyak nikmat, namun tetap membangkang perintah Allah. Ada sisi positif maupun negatif dari Bani Israel agar Umat Islam dapat mengambil hikmah dan tidak mengulangi kesalahan yang sama lagi. Seperti perilaku positifnya: menepati janji dan beriman seperti dalam surat Al-Maidah: 66 dan bersabar dari penderitaan sepeerti dalama surat Al-Qashash: 5.",
        keyword: "bani israil"
    },
    {
        id: 2,
        judul: "Pandangan Al-Qur'an terhadap Yahudi",
        isi: "Al-Qur'an menyebut kaum Yahudi dalam konteks sejarah dan ajaran. Beberapa ayat menyoroti penyimpangan dari Taurat. Kaum Yahudi disampaikan dalam berbagai ayat mengandung kritik, sejarah, keadlian juga, namun bukan kebencian terhadap identitas secara menyeluruh. Al-Qur'an menyebut mereka ahli kitab dan penyampaikan kritik atas sikap-sikap tertentu, bukan menyamaratakan.",
        keyword: "yahudi"
    },
    {
        id: 3,
        judul: "Perbedaan Yahudi dan Bani Israil dalam Al-Qur'an",
        isi: "Istilah 'Bani Israil' dalam Al-Qur'an merujuk pada keturunan Nabi Ya'qub dan lebih mencerminkan identitas etnis-historis. Sedangkan 'Yahudi' seringkali digunakan untuk menyebut kelompok yang mengikuti ajaran Taurat tetapi juga terlibat dalam penyimpangan tertentu, kata 'Yahudi' muncul di Al-Qur'an setelah perpecahan Bani Israel yaitu mereka diasingkan. Al-Qur'an membedakan antara keduanya, walau seringkali terkait. Penting untuk memahami konteks istilah ini agar tidak salah dalam memaknai ayat-ayat yang berkaitan.",
        keyword: "yahudi, bani israil"
    }
]

const badanTabel = document.getElementById("tabelAyat");
const teksPenuhDiv = document.getElementById("ayatTeksPenuh");

function renderTabel(dataTerfilter) {
    badanTabel.innerHTML = "";
    dataTerfilter.forEach((ayat) => {
        const baris = document.createElement("tr");
        baris.innerHTML = `
            <td>${ayat.no}</td>
            <td>${ayat.surah}</td>
            <td>${ayat.ayat}</td>
            <td>${ayat.ringkasan}</td>
            <td><button onclick="tampilkanTeks(${ayat.no})">Lihat Teks</button></td>
        `;
        badanTabel.appendChild(baris);
    });
}

function tampilkanTeks(no) {
    const ayat = dataAyat.find(a => a.no === no);
    teksPenuhDiv.innerHTML = `<strong>${ayat.surah} : ${ayat.ayat}</strong><p>${ayat.teks}</p>`;
}



function tampilkanArtikelKhusus(kataKunci) {
    const hasilArtikel = document.getElementById("artikel");
    hasilArtikel.innerHTML = "";

    const hasil = dataArtikel.filter((artikel) => 
        artikel.judul.toLowerCase().includes(kataKunci) ||
        artikel.isi.toLowerCase().includes(kataKunci) ||
        artikel.keyword.toLowerCase().includes(kataKunci)
    );

    hasil.forEach((artikel) => {
        const divArtikel = document.createElement("div");
        divArtikel.className = "artikel";
        divArtikel.innerHTML = `
            <h3>${artikel.judul}</h3>
            <p>${artikel.isi}</p>
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

    const hasilArtikel = document.getElementById("artikel");
    hasilArtikel.innerHTML = `<p>Silahkan cari di pencarian untuk mendapatkan hasil</p>`
}
window.onload = function () {
    tampilkanPesanAwal();
};


function cariAyat() {
    const pertanyaan = document.getElementById("inputCari").value.toLowerCase();
    const tabel = document.getElementById("judulTabelAyat");
    const hasilArtikelTabel = document.getElementById("hasilArtikel");
    hasilArtikelTabel.innerHTML = "";

    const terfilter = dataAyat.filter((ayat) =>
        ayat.surah.toLowerCase().includes(pertanyaan) ||
        ayat.ringkasan.toLowerCase().includes(pertanyaan) ||
        ayat.teks.toLowerCase().includes(pertanyaan)
    );

    if (pertanyaan.trim() === "") {
        tampilkanPesanAwal();
        tabel.style.display = "table";
        return;
    }

    if (terfilter.length === 0) {
        badanTabel.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center;">Tidak ditemukan hasil untuk pencarian tersebut</td>
                </tr>
            `;
        tabel.style.display = "table";

    } else {
        tabel.style.display = "table";
        renderTabel(terfilter);
    }
    tampilkanArtikelKhusus(pertanyaan);
}
