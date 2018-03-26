function MakeBig1() {

if(document.getElementById("exergue").checked ==true)
{
    document.getElementById("par1").style.color="red" ;
    document.getElementById("par1").style.backgroundColor="yellow" ;
    var size = document.getElementById("par1").style.fontSize;
    document.getElementById("par1").style.fontSize=40+size+"px";

}
else
{
    document.getElementById("par1").style.color="black" ;
    document.getElementById("par1").style.backgroundColor="#676368" ;

    document.getElementById("par1").style.fontSize="17px";
}

}

function MakeBig2() {

    if(document.getElementById("exergue").checked ==true)
    {
        document.getElementById("par2").style.color="red" ;
        document.getElementById("par2").style.backgroundColor="yellow" ;
        var size = document.getElementById("par2").style.fontSize;
        document.getElementById("par2").style.fontSize=40+size+"px";

    }
    else
    {
        document.getElementById("par2").style.color="black" ;
        document.getElementById("par2").style.backgroundColor="#676368" ;

        document.getElementById("par2").style.fontSize="17px";
    }

}



function changertaille()
{
    var input = document.getElementById("size");
    var taille= input.value;
    document.getElementById("par1").style.fontSize=taille+"px";
    document.getElementById("par2").style.fontSize=taille+"px";
}


function changerPolice() {
    var input2= document.getElementById("police").value  ;
    document.getElementById("par1").style.fontFamily=input2 ;
    document.getElementById("par2").style.fontFamily=input2 ;

}

window.onbeforeunload = function (e) {
    return confirm("Etes vous sur de vouloir quitter ?");
}

function comment () {
var commentaire = document.getElementById("comment").value ;

document.getElementById("commentSection").innerHTML+='<div class="b">'+ commentaire+ Date() +'</div>';

}