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
        surah: "Ali Imran",
        ayat: 112,
        ringkasan: "Orang-orang Yahudi ditimpa kehinaan dan kemurkaan karena menolak ayat-ayat Allah dan membunuh nabi-nabi",
        teks: "Mereka ditimpa kehinaan di mana saja mereka berada, kecuali bila berpegang pada tali Allah dan tali munisia..."
    }
];

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

function cariAyat() {
    const pertanyaan = document.getElementById("inputCari").value.toLowerCase();
    const terfilter = dataAyat.filter((ayat) =>
        ayat.surah.toLowerCase().includes(pertanyaan) ||
        ayat.ringkasan.toLowerCase().includes(pertanyaan) ||
        ayat.teks.toLowerCase().includes(pertanyaan)
    );
    renderTabel(terfilter);
}
renderTabel(dataAyat);
