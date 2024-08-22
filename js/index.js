import { PRODUCTS_DATA } from "./_DATA.js";

// Slider

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

// Cart

let localCart = PRODUCTS_DATA;
const cartLink = document.querySelector(".userBasket");
const addButton = document.querySelectorAll(".productBuyButton");
const aside = document.getElementsByTagName("aside")[0];
let isCartOpen = false;

aside.style.transition = "opacity 250ms ease-in-out, transform 250ms ease-in-out";
aside.style.transform = "translateX(260px)";

function handleOpenCart(e) {
  if(isCartOpen) {
    aside.style.transform = "translateX(0px)";
    aside.style.opacity = "1";
  } else {
    aside.style.transform = "translateX(260px)";
    aside.style.opacity = "0";
  }

  isCartOpen = !isCartOpen;
}

cartLink.addEventListener("click", handleOpenCart);

addButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productCard = btn.closest('.productCard');
    const producId = productCard.id;

    const cartUl = document.createElement("ul");
    const cartLi1 = document.createElement("li");
    const cartLi2 = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const productImg = document.createElement("img");
    productImg.className = "productImg";
    const trashImg = document.createElement("img");
    trashImg.src = "./assets/icons/trashCan.webp";
    trashImg.className = "trashImg";


    localCart.forEach((obj) => {
      if (obj.id == producId) {
        cartUl.textContent = obj.name;
        productImg.src = obj.img;
        cartLi1.append(productImg);
        cartLi2.textContent = `$${obj.price}`;

        deleteBtn.append(trashImg);
        deleteBtn.style.marginLeft = "15px";
        deleteBtn.addEventListener("click", () => {
          cartUl.remove();
        });

        cartLi2.append(deleteBtn);

        cartUl.append(cartLi1);
        cartUl.append(cartLi2);
        aside.append(cartUl);
      } else {return}
    })
    
    
  })
})