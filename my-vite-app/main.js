// Tâche 1: Fonction pour obtenir les nombres pairs
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Exemple d'utilisation de la fonction getEvenNumbers
const numbers = [1, 2, 3, 4, 5, 6];
console.log(getEvenNumbers(numbers)); // [2, 4, 6]

// Tâche 2: Interaction avec le DOM
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('changeTextButton');
  const textElement = document.getElementById('myText');

  button.addEventListener('click', () => {
    textElement.textContent = 'Hello, Check !';
  });

  // Tâche 3: Requête Fetch basique
  fetch('datas.json')
    .then(response => response.json())
    .then(data => {
      const todos = data.slice(0, 5); // Prendre les 5 premiers todos
      const ul = document.getElementById('todoList');

      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        ul.appendChild(li);
      });
    })
    .catch(error => console.error('Erreur lors du fetch des todos:', error));
});

