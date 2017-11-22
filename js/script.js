var parallax = document.getElementById("parallax-container");

function parallaxSlideshow() {
  var images = ["../images/manc1.jpg"];
  parallax.style.backgroundImage = url(images[0]);
}

parallaxSlideshow();