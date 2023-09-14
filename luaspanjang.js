var panjanginput = document.querySelector(".panjang");
var luasinput = document.querySelector(".luas");
var calculateButton = document.querySelector(".calculate");
var persegipanjang, panjang, luas;

function myFunction(){
    panjang = panjanginput.value;
    luas = luasinput.value;
    p = panjang*luas;
    alert("hasil mu adalah :" + p);
}