const data = {
    Telefon: "+373 69 123 456",
    Email: "contact@hairshop.md",
    Adresa: " Chișinău, str. Ștefan cel Mare 1"
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