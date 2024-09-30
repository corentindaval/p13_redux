
var list_db = [];
function init_list_db() {
    if (localStorage.getItem("db") == null) {
        list_db = [[0, "Tony", "Stark", "tony@stark.com", "password123"], [1, "Steve", "Rogers", "steve@rogers.com", "password456"]];
        localStorage.setItem("db", sauvegarde(list_db));
    } else {
        list_db = charger(localStorage.getItem("db"));
    }
}

function sauvegarde(donnee) {
    var resultat = "";
    var tinit = false;
    donnee.forEach(function (element) {//exemple pour donnee=tableau
        if (tinit === false) {
            tinit = true;
        } else {
            resultat += "#";
        }
        var nbelement = 0;
        element.forEach(function (selement) {
            resultat += selement;
            if (nbelement !== element.length - 1) {
                resultat += "/";
            }
            nbelement += 1;
        });
    });
    console.log("test resultat:" + resultat);

    return resultat;


}

function charger(stockagelocal) {
    var resultat = [];
    var lignes = stockagelocal.split("#");
    lignes.forEach(function (element) {
        var contenuligne = [];
        var contenuelement = element.split("/");
        contenuelement.forEach(function (selement) {
            contenuligne.push(selement);
        });
        resultat.push(contenuligne);
    });

    return resultat;
}
export default charger

function maj_db(id, nv_nom, nv_prenom) {
    const db_utilisateur = charger(localStorage.getItem("db"));
    var nv_db = [];
    db_utilisateur.forEach(function (element) {
        if (element[0] === id) {
            var nv_data = [id, nv_nom, nv_prenom, element[3], element[4]]
            nv_db.push(nv_data);
        } else {
            nv_db.push(element);
        }
    })
    localStorage.setItem("db", sauvegarde(nv_db));
}

export default maj_db