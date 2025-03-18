// Flat array
const movies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "Pulp Fiction",
];

console.log(movies);

//
//

// Object with arrays
const groceries = {
  fruits: ["apples", "bananas", "oranges"],
  vegetables: ["carrots", "broccoli", "spinach"],
  dairy: ["milk", "cheese", "yogurt"],
};

console.log(groceries);

//
//

// Array with objects
const onlineStore = [
  {
    name: "Laptop",
    price: 1200,
    inStock: true,
  },
  {
    name: "Phone",
    price: 800,
    inStock: false,
  },
  {
    name: "Headphones",
    price: 150,
    inStock: true,
  },
];

console.log(onlineStore);

//
//
//

const pushButton = document.querySelector("#pushButton");

pushButton.addEventListener("click", function () {
  console.log("Knapp er trykket!");
});
