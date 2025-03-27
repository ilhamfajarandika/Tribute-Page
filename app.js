const accordion = document.querySelectorAll('.accordion');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle('active');
    })
}

const quotes = [
    "Lebih baik di-(bom)-atom dari pada tidak merdeka 100%",
    "Tentara bukan merupakan suatu golongan di luar masyarakat, bukan suatu kasta yang berdiri di atas masyarakat. Tentara tidak lain dan tidak lebih dari salah satu bagian masyarakat yang mempunyai kewajiban tertentu",
    "Tentara hanya mempunyai kewajiban satu, ialah mempertahankan kedaulatan negara dan menjaga keselamatannya. Sudah cukup kalau tentara teguh memegang kewajiban ini, lagipula sebagai tentara, disiplin harus dipegang teguh. Tentara tidak boleh menjadi alat suatu golongan atau orang siapapun juga",
    "Karena kewajiban kamulah untuk tetap pada pendirian semula, mempertahankan dan mengorbankan jiwa untuk kedaulatan negara dan bangsa kita seluruhnya",
    "Pelihara TNI, pelihara angkatan perang kita. Jangan sampai TNI dikuasai oleh partai politik manapun juga. Ingatlah, bahwa prajurit kita bukan prajurit sewaan, bukan prajurit yang mudah dibelokkan haluannya. Kita masuk dalam tentara, karena keinsyafan jiwa dan sedia berkorban bagi bangsa dan negara",
    "Kemerdekaan satu negara, yang didirikan diatas timbunan runtuhan ribuan jiwa-harta-benda dari rakyat dan bangsanya, tidak akan dapat dilenyapkan oleh manusia siapapun juga",
    "Robek-robeklah badanku, potong-potonglah jasad ini, tetapi jiwaku dilindungi benteng merah putih. Akan tetap hidup, tetap menuntut bela, siapapun lawan yang aku hadapi",
    "Satu-satunya hak milik nasional/republik yang masih utuh tidak berubah-ubah, meskipun harus mengalami segala macam soal dan perubahan, hanyalah angkatan perang Republik Indonesia (Tentara Nasional Indonesia)",
    "Jangan mudah tergelincir dalam saat-saat seperti ini, segala tipu muslihat dan provokasi-provokasi yang tampak atau tersembunyi dapat dilalui dengan selamat, kalau kita waspada dan bertindak sebagai patriot",
    "Jangan sekali-kali di antara tentara kita ada yang menyalahi janji, menjadi pengkhianat nusa, bangsa dan agama. Harus kamu sekalian senantiasa ingat, bahwa tiap-tiap perjuangan tertentu memakan korban, tetapi kamu sekalian telah bersumpah ikhlas mati untuk membela temanmu yang telah gugur sebagai ratna, lagi pula untuk membela nusa, bangsa dan agamamu, sumpah wajib kamu tepati, sekali berjanji kamu tepati"
];

function createQuote() {
    const quoteElement = document.querySelector("#quotes p");
    var random = Math.floor(Math.random() * (quotes.length))

    if ((window.performance.navigation && window.performance.navigation.type === 1) || window.performance.getEntriesByType('navigation').map((nav) => nav.type).includes('reload')) {
        quoteElement.innerHTML = '" ' + quotes[random] + ' "';
    }
}

createQuote();