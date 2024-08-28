document.addEventListener('DOMContentLoaded', () => {

  // ## Tâche 1: Manipulation de Tableau
  // ## Task 1: Array Manipulation

  // Fonction pour filtrer les nombres selon une condition
  // Function to filter numbers based on a condition
  function filterNumbers(numbers, callback) {
    return numbers.filter(callback);
  }

  // Fonction pour obtenir les nombres pairs d'un tableau
  // Function to get even numbers from an array
  function getEvenNumbers(numbers) {
    return filterNumbers(numbers, number => number % 2 === 0);
  }

  // Fonction pour afficher les nombres pairs dans une liste
  // Function to display even numbers in a list
  function renderEvenNumbersList(numbers) {
    const evenNumbers = getEvenNumbers(numbers); // Obtenir les nombres pairs / Get the even numbers
    const evenNumbersListElement = document.getElementById('evenNumbersList'); // Sélectionner l'élément de la liste / Select the list element

    // Effacer le contenu existant de la liste
    // Clear the existing content of the list
    evenNumbersListElement.innerHTML = '';

    // Ajouter chaque nombre pair à la liste
    // Add each even number to the list
    evenNumbers.forEach(number => {
      const li = document.createElement('li'); // Créer un élément de liste / Create a list item
      li.textContent = number; // Définir le texte de l'élément de liste / Set the text of the list item
      evenNumbersListElement.appendChild(li); // Ajouter l'élément à la liste / Append the item to the list
    });
  }

  // ## Tâche 2: Interaction avec le DOM
  // ## Task 2: DOM Interaction

  // Fonction pour changer le texte de l'élément avec id 'myText'
  // Function to change the text of the element with id 'myText'
  function changeMyTextContent() {
    const myTextElement = document.getElementById('myText'); // Sélectionner l'élément du texte / Select the text element
    myTextElement.textContent = 'Hello, Check!'; // Changer le texte / Change the text
  }

  // Fonction pour initialiser le bouton de changement de texte
  // Function to initialize the text change button
  function initializeChangeTextButton() {
    const changeTextButton = document.getElementById('changeTextButton'); // Sélectionner le bouton / Select the button
    changeTextButton.addEventListener('click', changeMyTextContent); // Ajouter un événement 'click' au bouton / Add a 'click' event to the button
  }

  // ## Tâche 3: Récupération des Todos
  // ## Task 3: Fetching Todos

  // Fonction pour récupérer les données de l'API
  // Function to fetch data from the API
  function fetchTodos() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // URL de l'API / API URL

    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convertir la réponse en JSON / Convert the response to JSON
      });
  }

  // Fonction pour afficher les titres des 5 premiers todos
  // Function to display the titles of the first 5 todos
  function renderTodoList(todos) {
    const todoListElement = document.getElementById('todoList'); // Sélectionner l'élément de la liste / Select the list element

    // Effacer le contenu existant de la liste
    // Clear the existing content of the list
    todoListElement.innerHTML = '';

    // Ajouter chaque todo à la liste
    // Add each todo to the list
    todos.slice(0, 5).forEach(todo => {
      const li = document.createElement('li'); // Créer un élément de liste / Create a list item
      li.textContent = todo.title; // Définir le texte de l'élément de liste / Set the text of the list item
      todoListElement.appendChild(li); // Ajouter l'élément à la liste / Append the item to the list
    });
  }

  // Fonction pour gérer l'affichage des erreurs
  // Function to handle the display of errors
  function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('errorMessage'); // Sélectionner l'élément du message d'erreur / Select the error message element
    errorMessageElement.textContent = message; // Définir le texte du message d'erreur / Set the error message text
    errorMessageElement.style.display = 'block'; // Afficher l'élément / Display the element
  }

  // Fonction principale pour initialiser l'application
  // Main function to initialize the application
  function initializeApp() {
    const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Tableau d'exemple / Sample array
    
    // Afficher les nombres pairs / Display the even numbers
    renderEvenNumbersList(sampleNumbers);
    
    // Initialiser le bouton de changement de texte / Initialize the text change button
    initializeChangeTextButton();

    // Récupérer et afficher les todos / Fetch and display the todos
    fetchTodos()
      .then(data => {
        renderTodoList(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des todos:', error); // Log the error 
        displayErrorMessage('Failed to load todos. Please try again later.'); // Display an error message
      });
  }

  // Initialiser l'application au chargement du DOM
  // Initialize the application when the DOM is loaded
  initializeApp();
});
