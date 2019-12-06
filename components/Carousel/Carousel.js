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

function carouselCreator () {
  const carouselContainer = document.querySelector(".carousel-container");
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const firstImg = document.createElement('img');
  const secondImg = document.createElement('img');
  const thirdImg = document.createElement('img');
  const fourthImg = document.createElement('img')
  const rightButton = document.createElement('div');

  carousel.appendChild(leftButton);
  carousel.appendChild(firstImg);
  carousel.appendChild(secondImg);
  carousel.appendChild(thirdImg);
  carousel.appendChild(fourthImg);
  carousel.appendChild(rightButton);

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = " < ";
  rightButton.textContent = " > ";
  firstImg.src = "./assets/carousel/mountains.jpeg";
  secondImg.src = "./assets/carousel/computer.jpeg";
  thirdImg.src = "./assets/carousel/trees.jpeg";
  fourthImg.src = "./assets/carousel/turntable.jpeg";

  firstImg.style.display = "block";

  let currentImage = 0;
  const images = [
    firstImg,
    secondImg,
    thirdImg,
    fourthImg,
  ];

  leftButton.addEventListener("click", (event) => {
    images[currentImage].style.display = "none";
    currentImage--;
    if (currentImage === -1) {
      currentImage = images.length - 1;
    } 
    images[currentImage].style.display = "block";
  });
  rightButton.addEventListener("click", (event) => {
    images[currentImage].style.display = "none";
    currentImage++;
    if (currentImage === images.length) {
      currentImage = 0;
    }
    images[currentImage].style.display = "block";
  });

  carouselContainer.appendChild(carousel);
}

window.onload = carouselCreator;
