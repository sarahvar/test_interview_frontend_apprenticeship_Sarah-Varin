document.addEventListener('DOMContentLoaded', () => {
  // Task 1: Array Manipulation
  function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }

  // Exemples d'utilisation de la fonction getEvenNumbers
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = getEvenNumbers(numbersArray);

  // Affichage des nombres pairs dans le HTML
  const evenNumbersList = document.getElementById('evenNumbersList');
  evenNumbers.forEach(number => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    evenNumbersList.appendChild(listItem);
  });

  // Task 2: DOM Interaction
  const changeTextButton = document.getElementById('changeTextButton');
  const myText = document.getElementById('myText');

  changeTextButton.addEventListener('click', () => {
    myText.textContent = 'Hello, Check!';
  });

  // Task 3: Basic Fetch
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      const todoList = document.getElementById('todoList');
      const firstFiveTodos = data.slice(0, 5);

      firstFiveTodos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
        todoList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching todos:', error));
});
