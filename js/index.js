const buttons = document.querySelectorAll(".sliderControls");
const sliderContainer = document.querySelector(".SliderContainer")
const sliderTrack = document.querySelector(".sliderTrack");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const slideWidth = 300;
let maxTranlateX = 0;
let currentTranslateX = 0;



buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    
    const containerWidth = sliderContainer.clientWidth;
    const contentWidth = sliderTrack.scrollWidth;
    let minTranslateX = containerWidth - contentWidth;
    
    

    if (e.target.dataset.name === "left") {
        currentTranslateX += slideWidth;
        
    };
    if (e.target.dataset.name === "right") {
        currentTranslateX -= slideWidth;
        
    };

    if(currentTranslateX === maxTranlateX){
        leftArrow.style.display = "none";
    } else {leftArrow.style.display = "flex"};

    if(currentTranslateX <= minTranslateX) {
        rightArrow.style.display = "none";
    } else {rightArrow.style.display = "flex"};
    
    sliderTrack.style.transform = `translateX(${currentTranslateX}px)`;
    
  });
});