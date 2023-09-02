
/*-------------------------------
    CONCERNING NAVBAR SECTION
-------------------------------*/

// Open/close mobile menu nav bar
const navBtn = document.getElementById("hamburgerJS");
const navList = document.querySelector('.nav__list');

navBtn.addEventListener('click', function () {
  navList.classList.toggle('showJS');
});

// ABOUT section anchor point jump
// const aboutAnchorBtn = document.getElementById("aboutAnchorJS");
// const aboutSection = document.querySelector(".aboutAnchorDestinationJS");

// aboutAnchorBtn.addEventListener("click", function (e) {
//   aboutSection.scrollIntoView({
//     behaviour: "smooth"
//   })
//   e.preventDefault();
// })

// PROJECTS section anchor point jump
// const projectsAnchorBtn = document.getElementById("projectsAnchorJS");
// const projectsSection = document.querySelector(".projectsAnchorDestinationJS");

// projectsAnchorBtn.addEventListener("click", function (e) {
//   projectsSection.scrollIntoView({
//     inline: "end",
//     block: "end",
//     behaviour: "smooth"
//   })
//   e.preventDefault();
// })


// OLD anchor points jump code

document.getElementById("aboutAnchorJS").addEventListener("click", function (event) {
  event.preventDefault();
  let aboutSection = document.querySelector(".about");
  let aboutSectionPosition = aboutSection.getBoundingClientRect().top;
  let adjustedPosition = aboutSectionPosition - 220; // adjust the position with this number
  window.scrollTo({
    top: adjustedPosition
  });
});

document.getElementById("projectsAnchorJS").addEventListener("click", function (event) {
  event.preventDefault();
  let projectsSection = document.querySelector(".projects");
  let projectsSectionPosition = projectsSection.getBoundingClientRect().top;
  let adjustedPosition = projectsSectionPosition - 200; // adjust the position with this number
  window.scrollTo({
    top: adjustedPosition
  });
});


/*-------------------------------
    CONCERNING HEADER SECTION
-------------------------------*/

// Header section appear effect, immediately upon entering site
let reveal = document.querySelector('.revealHeaderJS');
reveal.classList.add('active');


// Header parallax effect on mouse move for planets 
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".mouseMoveParallaxJS").forEach(function (move) {

    let moving_value = move.getAttribute("data-value");
    let x = (e.clientX * moving_value) / 50;
    let y = (e.clientY * moving_value) / 50;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  }
  )
}


// Header star passing across screen on scroll parallax effect
let star = document.querySelector('.starParallaxJS')

window.addEventListener('scroll', function () {
  let value = window.scrollY

  star.style.transform = 'translateY(' + value * 1.5 + 'px) translateX(' + -value * 1.5 + 'px)'
})


/*-------------------------------
  CONCERNING MULTIPLE SECTIONS
-------------------------------*/

// About, Footer and Projects sections appear effect on scroll 
window.addEventListener('scroll', revealAbout);

function revealAbout() {
  let reveals = document.querySelectorAll('.revealSectionJS');

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 180;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    // uncomment else statement to make elements' animations show multiple times
    // else{
    //   reveals[i].classList.remove('active');
    // }
  }
}


/*-------------------------------
    CONCERNING SKILLS SECTION
-------------------------------*/

// Skills section parallax effect on scroll for bg image 
const skillsSection = document.getElementById('parallaxJS');

window.addEventListener('scroll', function () {
  let scrollY = window.pageYOffset;
  skillsSection.style.backgroundPositionY = -(scrollY * 0.20) + 'px';
});


/*-------------------------------
    CONCERNING PRE LOADER
-------------------------------*/

let preloader = document.getElementById("preloaderJS");

// listen for the page to finish loading
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

  // change the last value from "none" to "flex" in order to
  // see the animation forever and be able to style it




