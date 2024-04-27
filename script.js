// Fetching data from the Rick and Morty API and checking for errors
fetch('https://rickandmortyapi.com/api/character/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  // Rendering the characters
  .then(result => {
    const characters = result.results; // Accessing the 'results' array directly
    renderCharacters(characters);
  })
  // Catching errors if any
  .catch(error => console.error("Error occurred while fetching data", error));

// Function to render the characters
function renderCharacters(characters) {
  const cardContainer = document.querySelector(".cardContainer");

  // Looping through each character and create a card for it
  characters.forEach(character => {
    const { name, image, species, status, location } = character; // Destructuring character properties
    // Creating a card for each character
    const card = createCard(name, image, species, status, location);
    cardContainer.appendChild(card);
  });
}

// Function to create a card for a character
function createCard(name, image, species, status, location) {
  // Create a div element for the card
  const card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-6", "mb-4");

  // HTML content for the card element
  const cardContent = `
    <div class="card">
      <img src="${image}" class="card-img-top" alt="${name}">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Species: ${species}</p>
        <p class="card-text">Status: ${status}</p>
        <p class="card-text">Location: ${location.name}</p>
      </div>
    </div>
  `;

  // Set the HTML content to the card element
  card.innerHTML = cardContent;
  // Return the card element
  return card;
}
