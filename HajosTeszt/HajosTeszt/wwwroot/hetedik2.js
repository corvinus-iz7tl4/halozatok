window.onload = function () {
    document.getElementById("vissza").onclick = function vissza() {
        if (kérdésszám == 0) {
            kérdésszám = kérdések.length - 1;
            console.log(kérdésszám);
            kérdésMegjelenítés(kérdésszám);
            újkérdés();
        }
        else {
            kérdésszám--;
            console.log(kérdésszám);
            kérdésMegjelenítés(kérdésszám);
            újkérdés();
        }
    }
    document.getElementById("előre").onclick = function előre() {
        if (kérdésszám == kérdések.length - 1) {
            kérdésszám = 0;
            console.log(kérdésszám);
            kérdésMegjelenítés(kérdésszám);
            újkérdés();
        }
        else {
            kérdésszám++;
            console.log(kérdésszám);
            kérdésMegjelenítés(kérdésszám);
            újkérdés();
        }
    }

    letöltés();
}

var kérdések;
var helyesválasz;
var kérdésszám = 0;

function letöltés() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );
}
function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

    kérdések = kérdés;
    console.log(kérdések.length)
    kérdésMegjelenítés(kérdésszám);
}
function ellenőrzés1() {
    helyesválasz = kérdések[kérdésszám].correctAnswer;
    console.log(helyesválasz);
    if (helyesválasz == 1) {
        válasz1.classList.add("jó");
    }
    else {
        válasz1.classList.add("rossz");
    }
}
function ellenőrzés2() {
    helyesválasz = kérdések[kérdésszám].correctAnswer;
    console.log(helyesválasz);
    if (helyesválasz == 2) {
        válasz2.classList.add("jó");
    }
    else {
        válasz2.classList.add("rossz");
    }
}
function ellenőrzés3() {
    helyesválasz = kérdések[kérdésszám].correctAnswer;
    console.log(helyesválasz);
    if (helyesválasz == 3) {
        válasz3.classList.add("jó");
    }
    else {
        válasz3.classList.add("rossz");
    }
}

function újkérdés() {
    válasz1.classList.remove("rossz");
    válasz2.classList.remove("rossz");
    válasz3.classList.remove("rossz");

    válasz1.classList.remove("jó");
    válasz2.classList.remove("jó");
    válasz3.classList.remove("jó");
}
