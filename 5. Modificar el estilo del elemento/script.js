/* 
MODIFICAR EL ESTILO EL ELEMENTO
____________________________________________________________________________

La siguiente propiedad que aprenderemos es style, que es la 
responsable de cambiar el estilo existente. Puedes modificar 
el estilo de esta manera:
const element = document.getElementById("elementID");
element.style.color = "green";
Después de este código, el color de #elementID cambiará a green.

Se te proporciona un código HTML que contiene un div con un ID.
Utilizando solo JavaScript, cambia el color de fondo de este div a red:
1. Obtén el elemento utilizando la función getElementById.
2. Modifica el estilo del color de fondo del elemento utilizando la 
   propiedad style.backgroundColor

Pista 1
__________________________________________________
Para obtener el elemento box, use:
const box = document.getElementById("box");

Pista 2
__________________________________________________
Para cambiar el color de fondo, usa:
box.style.backgroundColor = "red";

_____________________________________________________________________________
*/
const box = document.getElementById("box");
box.style.backgroundColor = "red";