window.onload = function () {
  console.log('hey')
  try {
    TagCanvas.Start('myCanvas', 'tags', {
      textColour: '#00ffff',
      outlineColour: "gray",
      reverse: true,
      depth: 0.8,
      initial: [1.000, 0.630],
      maxSpeed: 0.01
    });
  } catch (e) {
    // something went wrong, hide the canvas container
    // document.getElementById('myCanvasContainer').style.display = 'none';
  }
};


// project popup
// var modal = document.getElementsByClassName('modal');
var modal = [].slice.call(document.getElementsByClassName('modal'))
var boxes = [].slice.call(document.getElementsByClassName('box'))
console.log('modal, ', boxes);
let activeBox = 0;

var buttons = [].slice.call(document.getElementsByClassName('button'));
var spans = [].slice.call(document.getElementsByClassName('close'));

// click on button to open popup box
let projectNum = 0;
for (let button of buttons) {
  let thisModal = modal[projectNum];
  button.addEventListener("click", (e) => {
    thisModal.style.display = "block";
    activeBox = e.currentTarget.getAttribute('box');
  });
  projectNum++;
};


// // to close the popup box
for (let span of spans) {
  span.addEventListener("click", (e) => {
    modal[activeBox].style.display = "block";

    console.log('whichModal: ', activeBox)
    modal[activeBox].style.display = "none";
  })
}

// // to close anywhere outside the popup box
window.onclick = function (event) {
  if (event.target == modal[activeBox]) {
    modal[activeBox].style.display = "none";
  }
}

// // image slider
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = boxes[activeBox].querySelectorAll(`.${boxes[activeBox].className} .mySlides`);
//   var dots = boxes[activeBox].querySelectorAll(`.${boxes[activeBox].className} .demo`);
//   if (n > x.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = x.length }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   console.log('slideIndex: ', slideIndex-1, x[slideIndex-1], x.length)
//   x[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " w3-white";
// }


$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});