/*
RECORRER Y MANIPULAR
___________________________________________________________________________________________________

Se te proporciona un código HTML que contiene cinco párrafos con el nombre de clase item.
Utilizando solo JavaScript, modifica el texto de los párrafos para que parezcan una lista numerada.
Aquí está el resultado esperado:
1. Banana
2. Apple
3. Pear
4. Water
5. Milk
¡No olvides refrescar la página web para ver las modificaciones de JS!
___________________________________________________________________________________________________
*/

const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
    items[i].textContent = `${i + 1}. ${items[i].textContent}`;
}