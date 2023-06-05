// console.log('JS OK')

// CICLO FOR ••••••••••••••••••••••••••••••••••••••••••••••••••••

// Creo un Array con lista della spesa 
// const listItems = ['pane', 'latte', 'acqua', 'pasta']
// console.log(listItems);

// Recupero elemento dal DOM
// const shoppingList = document.getElementById ('shopping-list')

// Creo una variabile per costruire la lista
// let list = '';

// Itero attraverso gli elementi dell'array
// for (let i = 0; i < listItems.length; i++) {
    // Creo gli elementi della lista 
//     list += `<li>${listItems[i]}</li>`
// }

// Inserisco il risultato nella pagina HTML
// shoppingList.innerHTML = list;







// CICLO WHILE ••••••••••••••••••••••••••••••••••••••••••••••••••••

// Creo un Array con lista della spesa 
const listItems = ['pane', 'latte', 'acqua', 'pasta']
console.log(listItems);

// Recupero elemento dal DOM
const shoppingList = document.getElementById ('shopping-list')

// Creo una variabile per costruire la lista
let list = '';

// Inizializzo l'indice a 0
let i = 0;

// Itero finché l'indice è inferiore alla lunghezza dell'array
while (i < listItems.length) {
    // Creo gli elementi della lista 
    list += `<li>${listItems[i]}</li>`

    // Incremento l'indice
    i++;
}

// Inserisco il risultato nella pagina HTML
shoppingList.innerHTML = list;