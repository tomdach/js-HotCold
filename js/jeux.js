var a = document.getElementById("reponse");

function nba() {
     return Math.floor(Math.random() * 100) +1;
}
var b = nba(1, 100);
console.log(b);

//a.innerHTML="qswdfgikjl";

function controle(form1) {




var c = document.form1.input.value;
  if (b>c) {

     a.innerHTML="plus grand!";
     a.style.color="#0404B4";

  }
  else if(b==c){

  	a.innerHTML="Tu as gagné !";
    a.style.color="green";

  }

  else{
  	a.innerHTML="plus petit !";
    a.style.color="#8A0808";
  }






}


