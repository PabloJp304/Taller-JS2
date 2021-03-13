let btn = document.getElementById('btn');
let Titulop = document.getElementById('TituloP');
let Photo = document.getElementById('Photo');
let DatosP = document.getElementById('DatosP');
let Titulos = document.getElementById('Titulos');
let contador = 0;

function camb(){
    if(contador==0)
    {
        Titulop.classList.add('negro');
        Photo.classList.add('negro');
        DatosP.classList.add('negro');
        Titulos.classList.add('rojo');
        contador=1;
    }
    else
    {
        Titulop.classList.remove('negro');
        Photo.classList.remove('negro');
        DatosP.classList.remove('negro');
        Titulos.classList.remove('rojo');
        contador=0;
    }
}
btn.addEventListener('click',camb,true) 