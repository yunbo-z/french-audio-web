let translations = {
    "eggplant": "l'aubergine",
    "avocado": "l'avocat",
    "sugerbeet": "la betterave",
    "carrot": "la carrotte",
    "celery": "le céleri",
    "pumpkin": "la courge",
    "endive": "l'endive",
    "turnip": "le navet",
    "onion": "l'oignon",
    "leek": "le poireau",
    "radish": "le radish",
}

function checkAnswers() {
    Object.entries(translations).forEach(element => {
        if (element[1] != document.getElementById(element[0]).value) {

            document.getElementById(element[0]).style.color = "red"
        }
        else {
            document.getElementById(element[0]).style.color = "green"

        }
    })
}

Object.entries(translations).forEach(element => {
    let tr = document.createElement('tr');
    document.getElementById('showcorrectanswercontainer').appendChild(tr);    
    let td1 = document.createElement('td');
    td1.innerHTML = element[0];
    let td2 = document.createElement('td');
    td2.innerHTML = '<input id=' + element[0] + ' type="text"/>';
    //tr.innerHTML = element[0] + ': <input id=' + element[0] + ' type="text"/>';
    tr.appendChild(td1); 
    tr.appendChild(td2);    

})
