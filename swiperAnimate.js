const $d = document;
const $cardSwiper = $d.querySelectorAll(".span-swiper");
const $spanSwiper = $d.querySelectorAll(".anime-slider");

//Enfoque slider
$cardSwiper.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.children[1].style.transform = "translateX(12px)";
    card.children[2].style.transform = "translateX(5px)";
  });
});

//Desenfoque slider
$cardSwiper.forEach((card) => {
  card.addEventListener("mouseout", () => {
    card.children[1].style.transform = "translateX(-10px)";
    card.children[2].style.transform = "translateX(-10px)";
  });
});
