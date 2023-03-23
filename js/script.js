//aggiungo bottone login che consente l'accesso se l'utente accede con email loggato

const button1 = document.querySelector('#verify');//ho aggiunto un queryselector perche ho due pulsanti differenti

button1.addEventListener("click", function(){
  var email = document.getElementById("email").value;
  var emailList = ["a@gmail.com","b@gmail.com","c@gmail.com"];

  //condizioni
  if (emailList.indexOf(email) !== -1) {
    document.getElementById("logged").innerHTML = ("Hai effettuato l'accesso, puoi iniziare il gioco");
    document.getElementById("container-game").style.display = "block";
    document.getElementById("warn").innerHTML = ("");
  } else {
    document.getElementById("warn").innerHTML = ("Utente non registrato, impossibile accedere");
    document.getElementById("container-game").style.display = "none";
  }
})

//function dado
const button2 = document.querySelector('#play');

button2.addEventListener("click", function(){


  var punteggioUtente = Math.floor(Math.random() * 6) + 1;
  var punteggioComputer = Math.floor(Math.random() * 6) + 1;

  document.getElementById("user").innerHTML = punteggioUtente;
  document.getElementById("cpu").innerHTML = punteggioComputer;
  if (punteggioUtente > punteggioComputer) {
    document.getElementById("risultato").innerHTML = "Hai vinto!";
  } else if (punteggioUtente < punteggioComputer) {
    document.getElementById("risultato").innerHTML = "Hai perso!";
  } else {
    document.getElementById("risultato").innerHTML = "Avete pareggiato!";
  }

})
document.addEventListener

//ho finito, vorrei farlo piu carino ma non ho tempo
