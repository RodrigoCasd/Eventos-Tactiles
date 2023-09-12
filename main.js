//variables principales para nuestro lienzo
var ultima_posicion_x, ultima_posicion_y;
color = "black";
ancho_de_linea = 2;

//Obtencion del elemento de canvas
canvas = document.getElementById('micanvas');
ctx = canvas.getContext("2d");

//Establecemos la variable que buscara el ancho de la pantalla y lo guardara.
var ancho=screen.width;
//Declaramos variables para el nuevo ancho y alto de las pantallas de los diferentes dispositivos.
nuevoancho=screen.width-70;
nuevaaltura=screen.height-300;
//Si el tamaño de la pantalla es inferior a 992 (significa 992 px), cambia el ancho y la altura
// del lienzo con el nuevo ancho y la nueva altura que hemos definido en los puntos anteriores
if (ancho<992){
    document.getElementById("micanvas").width=nuevoancho;
    document.getElementById("micanvas").height=nuevaaltura;
    document.body.style.overflow="hidden";
}
//Añadir propiedad para que el dibujo sobre el lienzo se pueda hacer muy suavemente.
//Añadir el detector de evento de inicio tactil (touchstart)
canvas.addEventListener("touchstart",mytouchstart);
// este código llamará a la función my_touchstart cuando toquemos la pantalla.
function mytouchstart(e){
    console.log("mytouchstart")
    //Actividad adicional
color = document.getElementById("color").value;
ancho_de_linea = document.getElementById("ancho_linea").value;
ultima_posicion_x = e.touches[0].clientX - canvas.offsetLeft; 
ultima_posicion_y = e.touches[0].clientY - canvas.offsetTop;


}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    console.log("mytouchmove")
    //Actividad adicional

ultima_posicion_actual_x = e.touches[0].clientX - canvas.offsetLeft; 
ultima_posicion_actual_y = e.touches[0].clientY - canvas.offsetTop;
// Igual que la app pasada de pintar
// Le dice al lienzo que comience a dibujar la forma/objeto.
ctx.beginPath();
//establece el color del dibujo
ctx.strokeStyle = color;
// establece el ancho del dibujo.
ctx.lineWidth = ancho_de_linea;

console.log("Última posición de las coordenadas X y Y = ");
console.log("x = " + ultima_posicion_x + "y = " + ultima_posicion_y);
//Tomamos las primeras coordenadas

ctx.moveTo(ultima_posicion_x,ultima_posicion_y)
console.log("Posición actual de las coordenadas X y Y = ");
console.log("x = " + ultima_posicion_actual_x + "y = " + ultima_posicion_actual_y);

ctx.lineTo( ultima_posicion_actual_x, ultima_posicion_actual_y); //Dibuja la linea. 
ctx.stroke();
 ultima_posicion_x = ultima_posicion_actual_x; ultima_posicion_y = ultima_posicion_actual_y;

}

// Igual que la app pasada de pintar
function clearArea() {
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
// fin de la app pasada de pintar