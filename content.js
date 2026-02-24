const data = {
    Telefon: "+373 69 123 456",
    Email: "contact@hairshop.md",
    Adresa: " Chișinău, str. Ștefan cel Mare 1",
    HeroImage: "hair_shop_background.jpg",
    Produse: [
        {   Link: "product_images/lip_oil.webp",
            Nume: "Care Lip Oil",
            Text: "Ulei de buze cu efect de hidratare intensă și luciu natural.",
            Pret: "Preț: 199 MDL",
        },
        {   Link: "product_images/riche_care_set.jpg ",
            Nume: "Riche care set",
            Text: "Set de îngrijire",
            Pret: "Preț: 899 MDL",
        },
        {   Link:"product_images/shampon_delicat.webp",
            Nume: "Shampon",
            Text: "Cu rezultat delicat",
            Pret: "Preț: 340 MDL",
        },
        {   Link:"product_images/gloss_ceramide.webp",
            Nume: "Gloss Ceramide",
            Text: "Luci și hidratare",
            Pret: "Preț: 220 MDL",
        },
        {   Link: "product_images/hair_oil.png",
            Nume: "Hair Oil",
            Text: "Hidratare Îndelungată",
            Pret: "Preț: 220 MDL",

        },
        {   Link:"product_images/honey_hair_oil.webp",
            Nume: "Hair Oil",
            Text: "Hrană pentru fire",
            Pret: "Preț: 350 MDL",

        },
        {   Link:"product_images/el_hair_oil.jpg",
            Nume: "Hair Oil",
            Text: "Spune nu firelor despicate",
            Pret: "Preț: 399 MDL",
        },
        {   Link:"product_images/el_shampoo.webp",
            Nume: "Elvive- Shampon",
            Text: "Cu efect garantat",
            Pret: "Preț: 450 MDL",
        },
        {   Link:"product_images/el_hair_mask.avif",
            Nume: "HAIR MASK",
            Text: "Claitate cu efect garantat",
            Pret: "Preț: 350 MDL",
        },
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



// const productCards = document.getElementsByClassName("product-card");
// console.log(productCards);
// for (let i = 0; i < productCards.length; i++) {
//     console.log(productCards[i]);
//     const imageLink = data.ImaginiLinks[i];
//     const image = document.createElement("img");
//     Link.Nume.Text.Pret.setAttribute("src", imageLink);
//     productCards[i].prepend(image)
// }



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
const productCards = document.getElementsByClassName("product-card");
console.log(productCards);
for (let i = 0; i < productCards.length; i++) {
    console.log(productCards[i]);
    const product = data.Produse[i];
    const image = document.createElement("img");
    image.setAttribute("src", product.Link);
    productCards[i].appendChild(image);

    // create h3 and set innerText tp product.Name
    // 
     const name = document.createElement("h3");
    name.innerText = product.Nume;
    productCards[i].appendChild(name);

}