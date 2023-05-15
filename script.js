//chiffre entre 1 et 100
let nombre_a_deviner = Math.floor(Math.random() * 100) + 1;
let choixjoueur;
let tentative = 0;
let parties = 0;
let nbr_historique = "";


//creation des messages et du bouton reset en HTML
const message = document.createElement("p");

const partie_joue = document.createElement("p");

const compteur = document.createElement("p");

const rejouer = document.createElement("button");

const historique = document.createElement("p");

//message de base
message.innerHTML = "Entre un nombre en 1 et 100";

partie_joue.innerHTML = "Nombre de parties jouées : " + parties;

// création des paragraphes
document.getElementById("parent").appendChild(message);

document.getElementById("parent").appendChild(partie_joue);

//bouton reset
rejouer.addEventListener("click", reset);

//envoie du form en lancement de la fonction repsone
document.getElementById("form").addEventListener("submit", reponse);


//fonction qui vérifie si le nombre choisi par le joueur est correct
function reponse(event) {
    event.preventDefault();
    choixjoueur = document.getElementById("nombre").value;


    if (nombre_a_deviner == choixjoueur) {
        message.innerHTML = "GAGNER !!!";
        rejouer.innerHTML = "REJOUER";
        document.getElementById("parent").appendChild(rejouer);
        rejouer.style.display = "initial";
    } else if (choixjoueur > nombre_a_deviner) {
        message.innerHTML = "Moins";
        tentative++;
    } else {
        message.innerHTML = "Plus";
        tentative++;
    }
    compteur.innerHTML = "Nombre de tentatives : " + tentative;
    if (tentative == 10) {
        reset()
    }
    document.getElementById("parent").appendChild(message);
    document.getElementById("parent").appendChild(compteur);
    document.getElementById("nombre").value = null;
    nbr_historique = nbr_historique + choixjoueur + ",";
    historique.innerHTML = nbr_historique;
    document.getElementById("historique").appendChild(historique);

}

//fonction qui réinitialise les variables et les messages
function reset() {
    nombre_a_deviner = Math.floor(Math.random() * 100) + 1;
    choixjoueur = "";
    tentative = 0;
    parties++;
    nbr_historique = "";
    message.innerHTML = "Entre un nombre en 1 et 100";
    compteur.innerHTML = "";
    rejouer.style.display = "none";
    partie_joue.innerHTML = "Nombre de parties jouées : " + parties;
}
