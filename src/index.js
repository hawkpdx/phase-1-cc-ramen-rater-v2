const ramensURL = `http://localhost:3000/ramens`;

const displayRamens = document.querySelector("#ramen-menu");
const detailImage = document.querySelector("#ramen-detail");
const ramenId = document.querySelector("#new-ramen");
const ramenName = document.querySelector("#new-name");
const restaurantName = document.querySelector("#new-restaurant");
const ramenImg = document.querySelector("#new-image");
const restaurantRating = document.querySelector("#new-rating");
const ramCom = document.querySelector("#new-comment");

function getAllRamens(ramensURL) {
  return fetch(ramensURL).then((res) => res.json());
}
function displayRamen(ramensArr) {
  ramensArr.forAll(renderInNav);
}

function renderRamens(ramensArr) {
  ramensArr.forEach(renderInNav);
}
function renderInNav(ramenObj) {
  const img = document.createElement("img");
  img.src = ramenObj.image;
  displayRamens.append(img);
}
function renderImage(ramenObj) {
  detailImage.src = ramenObj.new - detail;
  ramenId.src = ramenObj.new - id;
  ramenName.src = ramenObj.new - name;
  restaurantName.src = ramenObj.new - restaurant;
}

function handleClick() {
  src = "./assets/ramens.jpg";
  alt = "Description";
  onclick = "handleClick()";
  console.log("Photo clicked!");
}

getAllRamens(ramensURL).then((ramensArr) => renderRamens(ramensArr));

////////// GLOBAL
////////// DOM SELECTORS
/////////// FETCHES fnc
////////// RENDER fnc
///////// EVENT LISTENERS/HANDLERS
///////// INITIALIZERS
/*
    {
      "id": 1,
      "name": "Shoyu Ramen",
      "restaurant": "Nonono",
      "image": "./assets/ramen/shoyu.jpg",
      "rating": 7,
      "comment": "Delish. Can't go wrong with a classic!"
    },
    {
      "id": 2,
      "name": "Naruto Ramen",
      "restaurant": "Naruto",
      "image": "./assets/ramen/naruto.jpg",
      "rating": 10,
      "comment": "My absolute fave!"
    },
    {
      "id": 3,
      "name": "Nirvana Shiromaru",
      "restaurant": "Ippudo",
      "image": "./assets/ramen/nirvana.jpg",
      "rating": "7",
      "comment": "Do buy the hype."
    },
    {
      "id": 4,
      "name": "Gyukotsu Ramen",
      "restaurant": "Za-Ya Ramen",
      "image": "./assets/ramen/gyukotsu.jpg",
      "rating": 8,
      "comment": "Good to the last drop."
    },
    {
      "id": 5,
      "name": "Kojiro Red Ramen",
      "restaurant": "Ramen-Ya",
      "image": "./assets/ramen/kojiro.jpg",
      "rating": 6,
      "comment": "Perfect for a cold night."
  }
      */
