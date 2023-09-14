var panjanginput = document.querySelector(".alas");
var luasinput = document.querySelector(".tinggi");
var calculateButton = document.querySelector(".calculate");
var sgeitiga, alas, tinggi;

function myFunction(){
    alas = alasinput.value;
    tinggi = tinggiinput.value;
    sgeitiga = tinggi*alas/2;
    alert("hasil mu adalah :" + sgeitiga);
}