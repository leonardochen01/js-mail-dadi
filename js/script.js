//aggiungo bottone login che consente l'accesso se l'utente accede con email loggato

document.addEventListener("click", function(){

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
