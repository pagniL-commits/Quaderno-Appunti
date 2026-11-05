// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".


const itemInput = document.getElementById("item");
const btn = document.getElementById("btn-aggiungi");
const lista = document.getElementById("lista");
const err = document.getElementById("errore");
let items = [];

function aggiungiElementi(){
    err.textContent = "";
    if(itemInput.value === ""){
        err.textContent = "Inserire valore adeguato";
        return;
    }

    items.push(itemInput.value.trim());
    renderizzaItems();


    itemInput.value = "";
}

function renderizzaItems(){
    lista.innerHTML = ""; //svuota lista html
    
    // per ogni elemento in items (array) chiamiamo funz creaItem e aggiungiamo HTML a pagina
    for(let i=0; i<items.length; i++){
        const nuovoItem = creaItem(items[i]);
        lista.append(nuovoItem);
    }
}

function creaItem(contenuto){
    const nuovoItem = document.createElement("li");
    nuovoItem.textContent = contenuto;

    nuovoItem.addEventListener("click", () =>{
        nuovoItem.toggle("done");   // toggle = se c'è questa classe allora la toglie, altrimenti la aggiunge
    });

    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "X";
    nuovoItem.append(btnRimuovi);
    btnRimuovi.addEventListener("click", () => {
        const indice = items.findIndex(x => x ===contenuto);
        if(indice >= 0){
            items.splice(indice, 1);
            renderizzaItems();
        }
    });

    return nuovoItem;
}

btn.addEventListener("click", aggiungiElementi);