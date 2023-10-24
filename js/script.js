// DATI

const imagesList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
console.log(imagesList);

// INSERIMENTO DINAMICO DELLE IMMAGINI
const imageElem = document.querySelector(".items");
console.log(imageElem);

let myInnerString = "";

for (let i = 0; i < imagesList.length; i++) {
    const currentImage = imagesList[i];
    console.log(currentImage);
    myInnerString += `<div class="item"><img src="${currentImage}" alt=""></div>`
}

console.log(myInnerString);

imageElem.innerHTML += myInnerString

// MANIPOLAZIONE ELEMENTI : MOSTRARE IMMAGINI

const itemElem = document.querySelectorAll(".item")
console.log(itemElem)

