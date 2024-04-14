const arrayImages = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

littleCardCreator (arrayImages);

for (let x = 0; x < 5; x++) {

  let littleImgInput = document.getElementById(`btn${x}`);

  littleImgInput.addEventListener("click", function() {

    bigCardSelector (arrayImages, x);

  })

};

// CURRENT IMAGE
let curImg = 0

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




