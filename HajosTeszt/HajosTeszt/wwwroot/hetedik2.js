window.onload = function (e) {
    console.log("Oldal betöltve...");
    document.getElementById("előre_gomb").onclick = előre;
    document.getElementById("vissza_gomb").onclick = vissza;
    kérdésBetöltés(questionId)
}

var kérdések;
var jóVálasz;
var questionId = 4

function kérdésBetöltés(id) {
    fetch(`/questions/${sorszám}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                kérdésMegjelenítés(response.json())
            }
        })
} 
function kérdésMegjelenítés(kérdés) {
    if (!kérdés) return; //Ha undefined a kérdés objektum, nincs mit tenni
    console.log(kérdés);
    document.getElementById("kérdésszöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    jóVálasz = kérdés.correctAnswer;
    if (kérdés.image) {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép1").classList.remove("rejtett")
    }
    else {
        document.getElementById("kép1").classList.add("rejtett")
    } 
}
function ellenőrzés1() {
    jóVálasz = kérdések[questionId].correctAnswer;
    console.log(jóVálasz);
    if (jóVálasz == 1) {
        válasz1.classList.add("jó");
    }
    else {
        válasz1.classList.add("rossz");
    }
}
function ellenőrzés2() {
    jóVálasz = kérdések[questionId].correctAnswer;
    console.log(jóVálasz);
    if (jóVálasz == 2) {
        válasz2.classList.add("jó");
    }
    else {
        válasz2.classList.add("rossz");
    }
}
function ellenőrzés3() {
    jóVálasz = kérdések[questionId].correctAnswer;
    console.log(jóVálasz);
    if (jóVálasz == 3) {
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
function előre() {
    questionId++;
    kérdésBetöltés(questionId);
    újkérdés();
}

function vissza() {
    questionId--;
    kérdésBetöltés(questionId);
    újkérdés();
}
