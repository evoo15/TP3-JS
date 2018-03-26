function addition() {
	var r=document.getElementById("resultat");
	r.innerHTML=parseInt(document.getElementById("val1").value) +parseInt(document.getElementById("val2").value);

}

function multuplication() {
	var r=document.getElementById("resultat");
	r.innerHTML=document.getElementById("val1").value * document.getElementById("val2").value;

}

function soustraction() {
	var r=document.getElementById("resultat");
	r.innerHTML=document.getElementById("val1").value - document.getElementById("val2").value;

}

function division() {
	var r=document.getElementById("resultat");
	r.innerHTML=document.getElementById("val1").value / document.getElementById("val2").value;

}

function dpuissance() {
	var r=document.getElementById("resultat");

	r.innerHTML=document.getElementById("val1").value * document.getElementById("val1").value;

}