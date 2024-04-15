const arrayImages = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    number: 0,
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    number: 1,
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    number: 2,
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    number: 3,
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    number: 4,
  },
];

// IMG CREATOR
littleCardCreator (arrayImages);

// CURRENT IMAGE
let curImg = 0

// STANDARD IMAGE CHECKER
let checker = false
console.log(checker, "standard");

let invertChecker = true

// BUTTON STOP/START

let ssBtnInput = document.getElementById("ssBtn");
ssBtnInput.addEventListener("click", function() {

  if (checker === true) {
    checker = false
    console.log("------------");
    console.log("Carosello disattivato");
    console.log("------------");

    alert("stop")
  }
  else {
    checker = true
    console.log("------------");
    console.log("Carosello attivato");
    console.log("------------");

    alert("start")
  }

  // CAROSEL CHANGE ON TIME
  curImg = caroselTimeChanger();

})

// BTN INVERT ORDER
let invertBtnInput = document.getElementById("invertBtn");
invertBtnInput.addEventListener("click", function() {

  if (invertChecker === true) {
    invertChecker = false
  }
  else {
    invertChecker = true
  }

  alert ("carosello invertito");

})



// BIG IMG ON CLICK OF THE LITTLES
for (let x = 0; x < 5; x++) {

  let littleImgInput = document.getElementById(`btn${x}`);

  littleImgInput.addEventListener("click", function() {

    bigCardSelector (arrayImages, x);

    curImg = arrayImages[x]["number"]

    console.log("click");
    console.log(curImg);
  })

};

slideChangerBtn (curImg, arrayImages);

// PREV BTN
let prevClick = document.getElementById("leftBtn");
prevClick.addEventListener("click", function(){
  console.log("prev");

  curImg = curImg - 1;

  if (curImg < 0) {
    curImg = curImg + 5;
  }

  slideChangerBtn (curImg, arrayImages);
  console.log(curImg);
})

// NEXT BTN
let nextClick = document.getElementById("rightBtn");
nextClick.addEventListener("click", function(){
  console.log("next");

  curImg = curImg + 1;

  if (curImg > 4) {
    curImg = curImg - 5;
  }

  slideChangerBtn (curImg, arrayImages);
  console.log(curImg);
})

