/*Estudos*/
function iniciar() {
var tempoEmMinutos = 25;
var expiracao = new  Date(new Date().getTime() + tempoEmMinutos * 60000);

console.log(expiracao);
contador = window.setInterval(function(){
    faltam = expiracao - new Date();
    if (faltam <= 0){
    	window.clearInerval(contador);
        console.log("Prazo expirado");
    }
    minutos = Math.floor(faltam / 60000);
    segundos = faltam % 60000;
    tempoRestante = `${minutos}:${segundos.toString().substring(0,2)}`;
 document.getElementById('tempo').innerText = tempoRestante;
    console.log(tempoRestante);
}, 1000);
}

/*Intervalo*/
/*Reset*/