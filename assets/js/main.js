
/*-------------------------------
    CONCERNING NAVBAR SECTION
-------------------------------*/

// Open/close mobile menu nav bar
const navBtn = document.getElementById("hamburgerJS");
const navList = document.querySelector('.nav__list');

navBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
    console.log('heloo');
});

// Link anchor points jumping upon click in nav bar
document.getElementById("aboutAnchorJS").addEventListener("click", function(event) {
  event.preventDefault();
  let aboutSection = document.querySelector(".about");
  let aboutSectionPosition = aboutSection.getBoundingClientRect().top;
  let adjustedPosition = aboutSectionPosition - 220; // adjust the position by the amount of the margin
  window.scrollTo({
    top: adjustedPosition
  });
});

document.getElementById("projectsAnchorJS").addEventListener("click", function(event) {
  event.preventDefault();
  let projectsSection = document.querySelector(".projects");
  let projectsSectionPosition = projectsSection.getBoundingClientRect().top;
  let adjustedPosition = projectsSectionPosition - 200; // adjust the position by the amount of the margin
  window.scrollTo({
    top: adjustedPosition
  });
});


/*-------------------------------
    CONCERNING HEADER SECTION
-------------------------------*/

// Header section appear effect, immediately upon entering site
var reveal = document.querySelector('.revealHeaderJS');
  reveal.classList.add('active');


// Header parallax effect on mouse move for planets 
document.addEventListener("mousemove", parallax);
  function parallax(e){
    document.querySelectorAll(".mouseMoveParallaxJS").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 50;
    var y = (e.clientY * moving_value) / 50;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    }
)}


// Header star passing across screen on scroll parallax effect
let star = document.querySelector('.starParallaxJS')

window.addEventListener('scroll', function(){
  let value = window.scrollY

  star.style.transform = 'translateY(' + value * 1.5 + 'px) translateX(' + -value * 1.5 + 'px)'
})


/*-------------------------------
  CONCERNING MULTIPLE SECTIONS
-------------------------------*/

// About, Footer and Projects sections appear effect on scroll 
window.addEventListener('scroll', revealAbout);

  function revealAbout(){
    var reveals = document.querySelectorAll('.revealSectionJS');

    for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 200;
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      // uncomment else statement to make elements' animations show multiple times
      // else{
      //   reveals[i].classList.remove('active');
      // }
}}


/*-------------------------------
    CONCERNING SKILLS SECTION
-------------------------------*/

// Skills section parallax effect on scroll for bg image 
const skillsSection = document.getElementById('parallaxJS');

  window.addEventListener('scroll', function() {
    let scrollY = window.pageYOffset;
    skillsSection.style.backgroundPositionY = -(scrollY * 0.25) + 'px';
});




