const langInput = document.querySelector("#input");

const newP = document.createElement("p");
const text = document.createTextNode(langInput.value);

newP.appendChild(text);

console.log(newP);

const main = document.querySelector("main");
main.appendChild(newP);

const itemListSection = document.querySelector(".item-list");
itemListSection.before(newP);

newP.id = "paragraf";
newP.className = "par center";
newP.name = "deneme";

newP.setAttribute("id", "new-id");
newP.setAttribute("class", "new-claas");
newP.setAttribute("name", "new-claas");
newP.setAttribute("type", "button");
