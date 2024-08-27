document.addEventListener('DOMContentLoaded', () => {
  // ## Tâche 1: Manipulation de Tableau
  // Fonction pour obtenir les nombres pairs d'un tableau
  function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0); // Filtrer les nombres pairs
  }

  // Fonction pour afficher les nombres pairs dans une liste
  function displayEvenNumbers() {
    const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Tableau d'exemple
    const evenNumbers = getEvenNumbers(sampleNumbers); // Obtenir les nombres pairs
    const evenNumbersList = document.getElementById('evenNumbersList'); // Sélectionner l'élément de la liste

    // Effacer le contenu existant de la liste
    evenNumbersList.innerHTML = '';

    // Ajouter chaque nombre pair à la liste
    evenNumbers.forEach(number => {
      const li = document.createElement('li'); // Créer un élément de liste
      li.textContent = number; // Définir le texte de l'élément de liste
      evenNumbersList.appendChild(li); // Ajouter l'élément à la liste
    });
  }

  // ## Tâche 2: Interaction avec le DOM
  // Fonction pour changer le texte de l'élément avec id 'myText'
  function changeText() {
    const textElement = document.getElementById('myText'); // Sélectionner l'élément du texte
    textElement.textContent = 'Hello, Check!'; // Changer le texte
  }

  // Ajouter un écouteur d'événements au bouton pour changer le texte
  const changeTextButton = document.getElementById('changeTextButton'); // Sélectionner le bouton
  changeTextButton.addEventListener('click', changeText); // Ajouter un événement 'click' au bouton

  // ## Tâche 3: Récupération des Todos
  // Fonction pour récupérer et afficher les titres des 5 premiers todos
  function fetchTodos() {
    const apiUrl = 'datas.json'; // Fichier de l'API

    fetch(apiUrl)
      .then(response => response.json()) // Convertir la réponse en JSON
      .then(data => {
        // Prendre les 5 premiers todos
        const firstFiveTodos = data.slice(0, 5);
        const todoList = document.getElementById('todoList'); // Sélectionner l'élément de la liste

        // Effacer le contenu existant de la liste
        todoList.innerHTML = '';

        // Ajouter chaque todo à la liste
        firstFiveTodos.forEach(todo => {
          const li = document.createElement('li'); // Créer un élément de liste
          li.textContent = todo.title; // Définir le texte de l'élément de liste
          todoList.appendChild(li); // Ajouter l'élément à la liste
        });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des todos:', error); // Gérer les erreurs
      });
  }

  // Appeler les fonctions pour afficher les todos et les nombres pairs
  fetchTodos(); // Récupérer et afficher les todos
  displayEvenNumbers(); // Afficher les nombres pairs
});
