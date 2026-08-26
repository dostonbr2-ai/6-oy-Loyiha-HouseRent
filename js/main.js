let menyuTugmasi = document.getElementById("menyuTugmasi");
let menyuYopish = document.getElementById("menyuYopish");
let mobilMenyu = document.getElementById("mobilMenyu");

if (menyuTugmasi) {
    menyuTugmasi.onclick = function () {
        mobilMenyu.style.display = "block";
    };
}

if (menyuYopish) {
    menyuYopish.onclick = function () {
        mobilMenyu.style.display = "none";
    };
}

let modalOchish = document.getElementById("modalOchish");
let modalYopish = document.getElementById("modalYopish");
let modalOyna = document.getElementById("modalOyna");

if (modalOchish) {
    modalOchish.onclick = function () {
        modalOyna.style.display = "flex";
    };
}

if (modalYopish) {
    modalYopish.onclick = function () {
        modalOyna.style.display = "none";
    };
}

let qadam1 = document.getElementById("qadam1");
let qadam2 = document.getElementById("qadam2");
let qadam3 = document.getElementById("qadam3");
let qadam4 = document.getElementById("qadam4");

let keyingi1 = document.getElementById("keyingi1");
let keyingi2 = document.getElementById("keyingi2");
let keyingi3 = document.getElementById("keyingi3");

let orqaga2 = document.getElementById("orqaga2");
let orqaga3 = document.getElementById("orqaga3");
let orqaga4 = document.getElementById("orqaga4");

if (keyingi1) {
    keyingi1.onclick = function () {
        qadam1.style.display = "none";
        qadam2.style.display = "block";
    };
}

if (keyingi2) {
    keyingi2.onclick = function () {
        qadam2.style.display = "none";
        qadam3.style.display = "block";
    };
}

if (keyingi3) {
    keyingi3.onclick = function () {
        qadam3.style.display = "none";
        qadam4.style.display = "block";
    };
}

if (orqaga2) {
    orqaga2.onclick = function () {
        qadam2.style.display = "none";
        qadam1.style.display = "block";
    };
}

if (orqaga3) {
    orqaga3.onclick = function () {
        qadam3.style.display = "none";
        qadam2.style.display = "block";
    };
}

if (orqaga4) {
    orqaga4.onclick = function () {
        qadam4.style.display = "none";
        qadam3.style.display = "block";
    };
}

let profilTugma1 = document.getElementById("profilTugma1");
let profilTugma2 = document.getElementById("profilTugma2");
let profilTugma3 = document.getElementById("profilTugma3");

let profilSahifa1 = document.getElementById("profilSahifa1");
let profilSahifa2 = document.getElementById("profilSahifa2");
let profilSahifa3 = document.getElementById("profilSahifa3");

if (profilTugma1) {
    profilTugma1.onclick = function () {
        profilSahifa1.style.display = "block";
        profilSahifa2.style.display = "none";
        profilSahifa3.style.display = "none";
    };
}

if (profilTugma2) {
    profilTugma2.onclick = function () {
        profilSahifa1.style.display = "none";
        profilSahifa2.style.display = "block";
        profilSahifa3.style.display = "none";
    };
}

if (profilTugma3) {
    profilTugma3.onclick = function () {
        profilSahifa1.style.display = "none";
        profilSahifa2.style.display = "none";
        profilSahifa3.style.display = "block";
    };
}

let arizaTugmasi = document.getElementById("arizaTugmasi");
if (arizaTugmasi) {
    arizaTugmasi.onclick = function () {
        alert("Arizangiz muvaffaqiyatli yuborildi! Uy egasi siz bilan tez orada bog'lanadi.");
        modalOyna.style.display = "none";
    };
}

let elonChopEtish = document.getElementById("elonChopEtish");
if (elonChopEtish) {
    elonChopEtish.onclick = function () {
        alert("E'loningiz muvaffaqiyatli qabul qilindi va 15 daqiqada faollashadi!");
        window.location.href = "mening-elonlarim.html";
    };
}

let malumotSaqlash = document.getElementById("malumotSaqlash");
if (malumotSaqlash) {
    malumotSaqlash.onclick = function () {
        alert("Shaxsiy ma'lumotlaringiz saqlandi!");
    };
}

let parolYangilash = document.getElementById("parolYangilash");
if (parolYangilash) {
    parolYangilash.onclick = function () {
        alert("Parolingiz muvaffaqiyatli yangilandi!");
    };
}

function uySaqlash() {
    alert("Uy sevimlilar ro'yxatiga saqlandi!");
}

function elonOchirish() {
    let tasdiq = confirm("Haqiqatan ham bu e'lonni o'chirmoqchimisiz?");
    if (tasdiq) {
        alert("E'lon o'chirildi!");
    }
}