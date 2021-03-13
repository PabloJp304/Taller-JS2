function suma()
{
    var numero1=Number(document.getElementById('n1').value);
    var numero2=Number(document.getElementById('n2').value);
    var res=parseFloat(numero1)+parseFloat(numero2);
    document.getElementById('res').innerHTML=res;

}