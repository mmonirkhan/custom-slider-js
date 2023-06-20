const left = document.querySelector(".left-btn");
const right = document.querySelector(".right-btn");
const sliderImage = document.querySelector("#slider-image");
const dottedGroup = document.querySelector(".dotted-group");

const sliderImages = [
  "images/slider_01.jpg",
  "images/slider_02.jpg",
  "images/slider_03.jpg",
  "images/slider_04.jpg",
];
let activeSlider = 0;

left.addEventListener("click", function () {
  activeSlider--;
  if (activeSlider < 0) {
    activeSlider = sliderImages.length - 1;
  }

  updateSliderImage();
});
right.addEventListener("click", function () {
  activeSlider++;
  if (activeSlider >= sliderImages.length) {
    activeSlider = 0;
  }

  updateSliderImage();
});

function initializeDotted() {
  sliderImages.forEach(function (_item, index) {
    const dotElem = document.createElement("div");
    dotElem.classList.add("dot");
    if (index == 0) {
      dotElem.classList.add("active");
    }
    dotElem.addEventListener("click", (event) => {
      document.querySelectorAll(".dot").forEach((item) => {
        item.classList.remove("active");
      });
      event.target.classList.add("active");
      onDotClick(index);
    });
    dottedGroup.appendChild(dotElem);
  });
}

function onDotClick(clickedIndex) {
  activeSlider = clickedIndex;
  updateSliderImage();
}

function updateSliderImage() {
  sliderImage.src = sliderImages[activeSlider];
}

initializeDotted();
