console.log("hello");

const consoleBtn = document.getElementById("button");

const consoleBtnClick = () => {
  console.log("console", Math.random());
};

consoleBtn.addEventListener("click", consoleBtnClick);

console.log("Hello from console")


const lightBg = "rgb(236, 190, 197)";
const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
  const currentBodyBg = window.getComputedStyle(body).background;

  if (currentBodyBg.includes(lightBg)) {
    body.style.background = "rgb(57, 53, 80)";
    body.style.color = "#FFF";
    themeButton.innerText = "☀️";
  } else {
    body.style.background = lightBg;
    body.style.color = "#000";
    themeButton.innerText = "🌑";
  }
});


let products = JSON.parse(localStorage.getItem("products")) || [];

function createProductCard(product) {

  const productContainer = document.querySelector(".product");

  const card = document.createElement("div");
  card.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;

  const title = document.createElement("h3");
  title.innerText = product.name;

  const desc = document.createElement("p");
  desc.innerText = product.text;

  const pret = document.createElement("p");
  pret.classList.add("price");
  pret.innerText = product.price;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(pret);

  card.classList.add("product-card", "user-product"); // foarte important

  productContainer.appendChild(card);
}


products.forEach(product => {
  createProductCard(product);
});



const addButton = document.getElementById("add-product");

addButton.addEventListener("click", function () {

  const name = document.getElementById("product-name").value;
  const image = document.getElementById("product-image").value;
  const text = document.getElementById("product-text").value;
  const price = document.getElementById("product-price").value;

  const newProduct = {
    name: name,
    image: image,
    text: text,
    price: price
  };

  products.push(newProduct);

  localStorage.setItem("products", JSON.stringify(products));

  createProductCard(newProduct);

  document.getElementById("product-name").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-text").value = "";
  document.getElementById("product-price").value = "";

});

const deleteBtn = document.getElementById("delete-products");

deleteBtn.addEventListener("click", function() {
  localStorage.setItem("products", "[]");

    // Selectăm toate produsele adăugate de utilizator
    const userProducts = document.querySelectorAll(".user-product");

    userProducts.forEach(product => {
        product.remove(); // Șterge complet produsul
    });
});