window.onload =  () => {
    let hova = document.getElementById("szorzo");

    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        hova.appendChild(sor);
        sor.classList.add("egymas_melle");

        for (var o = 0; o < 10; o++) {
            let szam = document.createElement("div");
            sor.appendChild(szam);
            szam.innerText = (o + 1) * (s + 1);
            szam.classList.add("doboz");
            szam.style.backgroundColor = `rgb(${200 - ((o + 5) * (s + 10))},0,${255 - ((o + 10) * (s + 5))})`;
        }
    }

    let here = document.getElementById("elso");

    for (var s = 0; s < 10; s++) {
        let újszam = document.createElement("div");
        here.appendChild(újszam);
        újszam.innerText = (s + 1);
        újszam.classList.add("doboz");
        újszam.style.backgroundColor = `rgb(0,${255 - (s * 20)},${100 - (s * 10)})`;
    }


    var faktoriális = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * faktoriális(n - 1)
        }
    }
    let ide = document.getElementById("masodik");
    console.log("betöltődött");

    for (var s = 0; s < 10; s++) {
        let sor1 = document.createElement("div");
        sor1.classList.add("sor");
        ide.appendChild(sor1);       

        for (var o = 0; o <= s; o++) {
            let pascal = document.createElement("div");
            pascal.classList.add("elem");
            pascal.innerText = (faktoriális(s) / (faktoriális(o) * faktoriális(s - o)));
            pascal.style.backgroundColor = `rgb(${255 - (o + 10) + (s * 5)},${255 - (o + 5) * (s + 10)},0)`;
            sor1.appendChild(pascal);
        }
    }
}