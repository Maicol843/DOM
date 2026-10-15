/* 
getElementsByClassName

La función getElementsByClassName() devuelve un array de 
todos los elementos con un atributo de clase coincidente, 
lo cual es útil para seleccionar múltiples elementos que 
comparten el mismo estilo o comportamiento. Por ejemplo:
const elements = document.getElementsByClassName("className");
Lo anterior recupera los elementos con una clase de className 
y los guarda en una variable llamada elements.
Tenemos que iterar sobre esta variable para cambiar las 
propiedades de todos los elementos similares, por ejemplo:
for (const element of elements) {
    className.style.color = "blue";
    className.style.fontWeight = "bolder";
}

Se te proporciona un código HTML que contiene párrafos con un 
nombre de clase highlight.
Utilizando solo JavaScript, cambia el color y el grosor de la 
fuente del texto:
1. Recupera los elementos utilizando la función 
   getElementsByClassName().
2. Itera sobre esta variable de elementos recuperados utilizando 
   un bucle for.
3. Modifica el color a “orange” y el fontWeight  a “bold” 
   utilizando la propiedad style, para cada elemento en el array.
*/

const elements = document.getElementsByClassName("highlight");

for (const element of elements) {
    element.style.color = "orange";
    element.style.fontWeight = "bold";
}