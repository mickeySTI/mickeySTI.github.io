// nav button
function navFunction() {
  var nav = document.getElementById("nav");
  nav.style.display = nav.style.display == "none" ? "block" : "none";
}

// collapsible Description
var coll = document.getElementsByClassName("collapsible");
var i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";

    } else {
      content.style.display = "block";
    }
  });
}


// show : hide button
function descriptionDisplay(id){
              if(id == "show"){
              document.getElementById("hide").style.display="block";
              document.getElementById(id).style.display="none";
            }else{
              document.getElementById("show").style.display="block";
              document.getElementById(id).style.display="none";
            }
         }

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 0;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
  if(counter >= carouselImages.length -1) return;
  carouselSlide.style.transition ="transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});


prevBtn.addEventListener('click',()=>{
  if(counter <= 0) return;
  carouselSlide.style.transition ="transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});
