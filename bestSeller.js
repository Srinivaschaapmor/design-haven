// Select elements
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const carouselTrack = document.querySelector(".bestsellers-carousel-track");
const items = document.querySelectorAll(".bestsellers-carousel-item");
const itemWidth = items[0].offsetWidth; // Width of a single item
const marginRight = 0; // Margin between items

let currentIndex = 0;
const totalItems = items.length;

// Set the width of the carousel track based on the number of items
const totalWidth = (itemWidth + marginRight) * totalItems;

carouselTrack.style.width = `${totalWidth}px`; // Make sure the track is wide enough to fit all items
//carouselTrack.style.width = `0px`; // Make sure the track is wide enough to fit all items

// Move carousel based on current index
function moveCarousel() {
  const offset = -(currentIndex * (itemWidth + marginRight)); // Calculate the offset
  carouselTrack.style.transform = `translateX(${offset}px)`;
}

// Handle previous button click
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 2; // Loop back to the last item
  }
  moveCarousel();
});

// Handle next button click
nextButton.addEventListener("click", () => {
  if (currentIndex < totalItems - 2) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first item
  }
  moveCarousel();
});
