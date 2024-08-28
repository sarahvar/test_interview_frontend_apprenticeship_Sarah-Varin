document.addEventListener('DOMContentLoaded', () => {
  
  // ## Tâche 1: Manipulation de Tableau

  // Fonction pour filtrer les nombres selon une condition
  function filterNumbers(numbers, callback) {
    return numbers.filter(callback);
  }

  // Fonction pour obtenir les nombres pairs d'un tableau
  function getEvenNumbers(numbers) {
    return filterNumbers(numbers, number => number % 2 === 0);
  }

  // Fonction pour afficher les nombres pairs dans une liste
  function renderEvenNumbersList(numbers) {
    const evenNumbers = getEvenNumbers(numbers); // Obtenir les nombres pairs
    const evenNumbersListElement = document.getElementById('evenNumbersList'); // Sélectionner l'élément de la liste

    // Effacer le contenu existant de la liste
    evenNumbersListElement.innerHTML = '';

    // Ajouter chaque nombre pair à la liste
    evenNumbers.forEach(number => {
      const li = document.createElement('li'); // Créer un élément de liste
      li.textContent = number; // Définir le texte de l'élément de liste
      evenNumbersListElement.appendChild(li); // Ajouter l'élément à la liste
    });
  }

  // ## Tâche 2: Interaction avec le DOM

  // Fonction pour changer le texte de l'élément avec id 'myText'
  function changeMyTextContent() {
    const myTextElement = document.getElementById('myText'); // Sélectionner l'élément du texte
    myTextElement.textContent = 'Hello, Check!'; // Changer le texte
  }

  // Fonction pour initialiser le bouton de changement de texte
  function initializeChangeTextButton() {
    const changeTextButton = document.getElementById('changeTextButton'); // Sélectionner le bouton
    changeTextButton.addEventListener('click', changeMyTextContent); // Ajouter un événement 'click' au bouton
  }

  // ## Tâche 3: Récupération des Todos

  // Fonction pour récupérer les données de l'API
  function fetchTodos() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // URL de l'API

    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convertir la réponse en JSON
      });
  }

  // Fonction pour afficher les titres des 5 premiers todos
  function renderTodoList(todos) {
    const todoListElement = document.getElementById('todoList'); // Sélectionner l'élément de la liste

    // Effacer le contenu existant de la liste
    todoListElement.innerHTML = '';

    // Ajouter chaque todo à la liste
    todos.slice(0, 5).forEach(todo => {
      const li = document.createElement('li'); // Créer un élément de liste
      li.textContent = todo.title; // Définir le texte de l'élément de liste
      todoListElement.appendChild(li); // Ajouter l'élément à la liste
    });
  }

  // Fonction pour gérer l'affichage des erreurs
  function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
  }

  // Fonction principale pour initialiser l'application
  function initializeApp() {
    const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Tableau d'exemple
    
    // Afficher les nombres pairs
    renderEvenNumbersList(sampleNumbers);
    
    // Initialiser le bouton de changement de texte
    initializeChangeTextButton();

    // Récupérer et afficher les todos
    fetchTodos()
      .then(data => {
        renderTodoList(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des todos:', error);
        displayErrorMessage('Failed to load todos. Please try again later.');
      });
  }

  // Initialiser l'application au chargement du DOM
  initializeApp();
});
