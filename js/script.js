// var buttonEl = document.getElementById("generator");
// buttonEl.addEventListener('click', function(){})
// var surname = document.getElementById('write').value;


var surname = prompt("inserire il cognome");

var listSurname = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

listSurname.push(surname);

listSurname.sort();

var finalList = document.getElementById("list");
var surnamePosition = 0;
 for (var i = 0; i < listSurname.length; i++){
     finalList.innerHTML += "<li>" + listSurname[i]  + "</li>";
     if(surname == listSurname[i]){
        surnamePosition = i ;
     }

    }

    document.getElementById("number").innerHTML += (surnamePosition + 1);
