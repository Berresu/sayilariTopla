let sayi=document.getElementById("numberSayi");
let button=document.getElementById("btnGir");
let sonuc=document.getElementById("sonuc");
let n=Math.floor(Math.random()*50);

button.addEventListener("click", ()=>{
    console.log(n);
    for(let i=0; i<=n; i++){
        i=i+i;
        console.log(i=i+i);
        sonuc.innerHTML=i;
    }
});
