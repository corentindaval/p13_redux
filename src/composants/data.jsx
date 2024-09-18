
//exemple utilisation local storage
/*
function init_list_niveaux() {
    if (localStorage.getItem("listniveau") == null) {
        const tabzonejeuinitial = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 3, 1, 1, 1, 1], [1, 1, 1, 1, 1, 2, 1, 1, 1, 1], [1, 1, 1, 1, 1, 2, 1, 1, 1, 1], [1, 1, 1, 2, 2, 2, 1, 1, 1, 1], [1, 1, 1, 2, 2, 2, 1, 1, 1, 1], [1, 1, 1, 1, 5, 1, 1, 1, 1, 1], [1, 1, 1, 1, 2, 1, 1, 1, 1, 1], [1, 1, 1, 1, 4, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
        const tabzone2 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 2, 2, 2, 3, 1, 1, 1], [1, 3, 1, 2, 2, 1, 1, 1, 3, 1], [1, 2, 1, 1, 5, 1, 1, 1, 2, 1], [1, 2, 2, 5, 2, 5, 2, 2, 2, 1], [1, 2, 2, 1, 2, 1, 1, 2, 2, 1], [1, 1, 1, 1, 4, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
        const tabzone3 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 2, 2, 1, 1, 1, 1, 3, 1], [1, 1, 2, 2, 2, 3, 1, 1, 2, 1], [1, 1, 2, 2, 1, 1, 1, 1, 2, 1], [1, 2, 2, 2, 1, 1, 1, 1, 2, 1], [1, 2, 1, 2, 1, 1, 1, 1, 2, 1], [1, 2, 2, 2, 5, 2, 5, 2, 2, 1], [1, 2, 2, 2, 1, 2, 1, 2, 2, 1], [1, 1, 1, 1, 1, 4, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
        const tabzone4 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 2, 1, 1, 1, 1, 3, 1], [1, 3, 1, 2, 1, 1, 1, 1, 2, 1], [1, 2, 2, 2, 2, 3, 1, 1, 2, 1], [1, 2, 1, 2, 1, 1, 1, 1, 2, 1], [1, 2, 2, 5, 2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 1, 1, 1, 1, 2, 1], [1, 2, 2, 2, 5, 2, 5, 2, 2, 1], [1, 2, 2, 2, 1, 4, 1, 2, 2, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
        liste_niveaux = [];
        liste_niveaux.push(tabzonejeuinitial);
        liste_niveaux.push(tabzone2);
        liste_niveaux.push(tabzone3);
        liste_niveaux.push(tabzone4);
        localStorage.setItem("listniveau", sauv_listniveau(liste_niveaux));
    } else {
        liste_niveaux = charg_listniveau(localStorage.getItem("listniveau"));
    }
}
*/
function sauvegarde(donnee) {
    var resultat = "";
    var tinit = false;
    donnee.forEach(function (element) {//exemple pour donnee=tableau
        if (tinit === false) {
            tinit = true;
        } else {
            resultat += "/";
        }
        var nbelement = 0;
        element.forEach(function (selement) {
            resultat += selement;
            if (nbelement !== element.length - 1) {
                resultat += ",";
            }
            nbelement += 1;
        });
    });
    console.log("test resultat:" + resultat);

    return resultat;


}

function charger(stockagelocal) {
    var resultat = [];
    var lignes = stockagelocal.split("/");
    lignes.forEach(function (element) {
        var contenuligne = [];
        var contenuelement = element.split(",");
        contenuelement.forEach(function (selement) {
            contenuligne.push(selement);
        });
        resultat.push(contenuligne);
    });

    return resultat;
}