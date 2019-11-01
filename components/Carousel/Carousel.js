/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const one = document.querySelector("./assets/carousel/mountains.jpeg")
const two = document.querySelector("./assets/carousel/computer.jpeg")
const three = document.querySelector("./assets/carousel/trees.jpeg")
const four = document.querySelector("./assets/carousel/turntable.jpeg")

const car = document.querySelector("carousel-container");
car.appendChild(carouselCreator());

function carouselCreator(){
  
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const rightButton = document.createElement("div");

  carousel.append(leftButton, img1, img2, img3, img4, rightButton);

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  img1.src = one;
  img2.src = two;
  img3.src = three;
  img4.src = four;

  return carousel;
}