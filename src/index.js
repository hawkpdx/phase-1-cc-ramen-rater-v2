// GLOBAL
const BASE_URL = 'http://localhost:3000';

// DOM EVENTS
const handleClick = (ramen) => {
  const ramenDetail = document.getElementById('ramen-detail');
  ramenDetail.innerHTML = `
    <img class="detail-image" src="${ramen.image}" alt="${ramen.name}" />
    <h2 class="name">${ramen.name}</h2>
    <h3 class="restaurant">${ramen.restaurant}</h3>
  `;
  const ratingDisplay = document.getElementById('rating-display');
  ratingDisplay.textContent = ramen.rating;
  const commentDisplay = document.getElementById('comment-display');
  commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('new-name').value;
    const restaurant = document.getElementById('new-restaurant').value;
    const image = document.getElementById('new-image').value;
    let rating = parseInt(document.getElementById('new-rating').value);
    const comment = document.getElementById('new-comment').value;

    // ADD RATING
    if (rating < 0 || rating > 10 || isNaN(rating)) {
      alert('Please enter a valid rating between 0 and 10.');
      return;
    }

    const newRamen = { name, restaurant, image, rating, comment };

    
    const ramenMenu = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    ramenMenu.appendChild(img);


    form.reset();

   
    await fetch(`${BASE_URL}/ramens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRamen),
    });
  });
};

const displayRamens = async () => {
  const response = await fetch(`${BASE_URL}/ramens`);
  const ramens = await response.json();
  const ramenMenu = document.getElementById('ramen-menu');
  ramenMenu.innerHTML = '';
  ramens.forEach((ramen) => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
};
// INITIALIZERS
const main = () => {
  displayRamens();
  addSubmitListener();
};

document.addEventListener('DOMContentLoaded', main);