window.onload = function (e) {
    console.log("Oldal betöltve...");
    document.getElementById("előre_gomb").onclick = előre;
    document.getElementById("vissza_gomb").onclick = vissza;
    kérdésBetöltés(questionId, hotList)
}

var kérdések;
var jóVálasz;
var questionId = 4
var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;       //A következő kérdés száma a teljes listában

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
            }
    );.then(
        q => {
            hotList[destination].question = q;
            hotList[destination].goodAnswers = 0;
            console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
            if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                displayedQuestion = 0;
                kérdésMegjelenítés();
            }
        }
}
function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Első kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}
function kérdésMegjelenítés(kérdés) {
    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
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
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
}

function vissza() {
    questionId--;
    kérdésBetöltés(questionId);
    újkérdés();
}
