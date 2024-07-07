let sayi= Number(prompt("lütfen sayı girin: "))
let sonuc;

for(let i=2; i<Math.floor(sayi/2); i++){
    if(sayi%i==0){
        sonuc=false;
        break;
    }
}

if(sonuc){
    alert(sayi + "asaldır")
}else{
    alert(sayi + "asal değildir")
}