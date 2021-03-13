let txt = document.getElementById('txt');
let contador = document.getElementById('contador');

txt.oninput = function(){
    let cantidad = txt.value.length;
    contador.innerHTML = cantidad;
}
