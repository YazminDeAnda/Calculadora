let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

/* para hacer click en el boton y realice algo*/
boton.addEventListener('click', hacersuma)
function hacersuma(){
    let n1=parseFloat(document.getElementById ('n1').value)
    let n2=parseFloat(document.getElementById ('n2').value)
    let n3=n1+n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}
