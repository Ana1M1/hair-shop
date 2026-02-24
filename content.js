const data = {
    Telefon: "+373 69 123 456",
    Email: "contact@hairshop.md",
    Adresa: " Chișinău, str. Ștefan cel Mare 1",
    HeroImage: "hair_shop_background.jpg",
    ImaginiLinks: [
        "product_images/lip_oil.webp",
        "product_images/riche_care_set.jpg ",
        "product_images/shampon_delicat.webp",
        "product_images/gloss_ceramide.webp",
        "product_images/hair_oil.png",
        "product_images/honey_hair_oil.webp",
        "product_images/el_hair_oil.jpg",
        "product_images/el_shampoo.webp",
        "product_images/el_hair_mask.avif"
    ]
};
console.log("data: ", data);

const contactHeading = document.createElement("h3");
contactHeading.innerHTML = `
  <p><strong> Telefon:</strong> ${data.Telefon}</p>
  <p><strong> Email:</strong> ${data.Email}</p>
  <p><strong> Adresă:</strong> ${data.Adresa}</p>
  `
const contactInfo = document.getElementsByClassName("contact-info")[0]

contactInfo.prepend(contactHeading);


const hero = document.getElementById("background")
console.log("hero: ", hero);
hero.setAttribute("src", data.HeroImage);

const productCards = document.getElementsByClassName("product-card");
console.log(productCards);
for (let i = 0; i < productCards.length; i++) {
    console.log(productCards[i]);
    const imageLink = data.ImaginiLinks[i];
    const image = document.createElement("img");
    image.setAttribute("src", imageLink);
    productCards[i].prepend(image)
}



// const Parent = {
//     name: "Ion",
//     age: 45,
//     children: [
//         {
//             name: "Maxim",
//             age: 5
//         },
//         {
//             name:"Alex",
//             age: 9
//         }
//     ],
// }

// for (let i = 0; i < Parent.children.length; i++) {
//     const currentChild = Parent.children[i];

//     currentChild.age;
// }