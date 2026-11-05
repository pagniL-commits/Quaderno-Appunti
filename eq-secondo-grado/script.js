const btn = document.getElementById("btn-calcola");
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
let s1 = document.getElementById("soluzione1");
let s2 = document.getElementById("soluzione2");

function calcolaSoluzioni() {
    let a = parseFloat(aInput.value) || 1;
    let b = parseFloat(bInput.value) || 1;
    let c = parseFloat(cInput.value) || 0;

    const d = (b * b) - (4 * a * c);
    console.log("Delta:", d);

    if (d > 0) {
        let x1 = (-b - Math.sqrt(d)) / (2 * a);
        let x2 = (-b + Math.sqrt(d)) / (2 * a);
        s1.textContent = `Soluzione 1: ${x1.toFixed(2)}`;
        s2.textContent = `Soluzione 2: ${x2.toFixed(2)}`;
    } else if (d === 0) {
        let x = -b / (2 * a);
        s1.textContent = `Soluzione unica: ${x}`;
        s2.textContent = "";
    } else {
        s1.textContent = "Nessuna soluzione reale";
        s2.textContent = "";
    }
}

btn.addEventListener("click", calcolaSoluzioni);