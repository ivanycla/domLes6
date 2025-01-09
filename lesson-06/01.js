const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
];

let currentIndex = 0;
const img = document.getElementById("web-tech-image");

const prevButton = document.getElementById("prev-button").onclick = function() {
  if (currentIndex === 0) {
    currentIndex = WEB_TECH_IMAGES.length - 1;
  } else {
    currentIndex--;
  }
  img.src = WEB_TECH_IMAGES[currentIndex];
};

const nextButton = document.getElementById("next-button").onclick = function() {
  if (currentIndex === WEB_TECH_IMAGES.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  img.src = WEB_TECH_IMAGES[currentIndex];
};
