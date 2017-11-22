const parallax = document.getElementById("parallax"),
      images = ["../images/manc1.jpg", "../images/manc2.jpg", "../images/manc3.jpg"];
let slide = 1;
parallax.style.backgroundImage = "url("+images[slide-1]+")";

setInterval(imageSlideshow, 3000);

function imageSlideshow() {
  switch(slide) {
    case 0:
      parallax.style.backgroundImage = "url("+images[slide]+")";
      slide++;
    break;
    case 1:
      parallax.style.backgroundImage = "url("+images[slide]+")";
      slide++;
    break;
    case 2:
      parallax.style.backgroundImage = "url("+images[slide]+")";
      slide = 0;
    break;
    default:
      null;
    break;
  }
}