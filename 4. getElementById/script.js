/* 
getElementById
_______________________________________________________________________________

La función getElementById() recupera el primer elemento con 
un atributo id coincidente, por ejemplo:
const element = document.getElementById("elementId");
Lo anterior recupera el elemento con un id de elementId y lo guarda en una 
variable llamada element.
Ten en cuenta el prefijo document, este es el DOM del archivo HTML.
¡Después de recuperar un elemento, puedes manipularlo usando JavaScript!
La primera propiedad que aprenderemos es textContent, que contiene el 
contenido de texto del elemento. Puedes modificar el texto de esta manera:
const element = document.getElementById("elementId");
element.textContent = "some text";
Después de este código, el texto de #elementId será some text.

Se te proporciona código HTML que contiene un encabezado con un ID.
Usando solo JavaScript, cambia el texto de este elemento a “Hello!”:
Obtén el elemento usando la función getElementById.
Modifica el texto del elemento usando la propiedad textContent.

Pista 1
_______________________________________________________
Para recuperar el elemento, utiliza:
const heading = document.getElementById("heading");

Pista 2
_______________________________________________________
Para modificar el texto, utiliza:
heading.textContent = "Hello!";
_______________________________________________________________________________                                                 
*/

const heading = document.getElementById("heading");
heading.textContent = "Hello!";