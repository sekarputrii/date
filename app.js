let date = new Date();

let hariarray = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"]
let bulanarray= ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
let hari= date.getDay();
let bulan= date.getMonth();
let tanggal= date.getDate();
let tahun= date.getFullYear();

let tanggalsekarang = hariarray[hari] + "," +tanggal+ " " +bulanarray[bulan]+" "+tahun

document.getElementById("tanggal").innerHTML = tanggalsekarang

function checkWaktu()
{
    let date = new Date
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();

    let waktu = jam + "." + menit + "." + detik
    document.getElementById("pukul").innerHTML = waktu
}
setInterval(checkWaktu, 1000)

let tg = Date()
console.log(tg)

