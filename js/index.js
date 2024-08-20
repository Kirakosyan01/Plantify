const buttons = document.querySelectorAll(".sliderControls");
const sliderTrack = document.querySelector(".sliderTrack");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let maxTranlateX = 0;
let minTranslateX = -600;
let currentTranslateX = 0;



buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const slideWidth = 300;
    
    if (e.target.dataset.name === "left") {
        if(currentTranslateX === maxTranlateX) {return}
        currentTranslateX += slideWidth;
    }
    if (e.target.dataset.name === "right") {
        if(currentTranslateX === minTranslateX) {return}
        currentTranslateX -= slideWidth;
    }

    if(currentTranslateX === maxTranlateX){
        leftArrow.style.display = "none";
    } else {leftArrow.style.display = "flex"}

    if(currentTranslateX === minTranslateX) {
        rightArrow.style.display = "none";
    } else {rightArrow.style.display = "flex"}
    
    sliderTrack.style.transform = `translateX(${currentTranslateX}px)`;
    console.log(sliderTrack.style.transform);
    
  });
});