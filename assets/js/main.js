
// Open/close mobile menu
const navBtn = document.getElementById("hamburger");
const navList = document.getElementById('nav-list');

navBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});


// Header section appear effect, immediately upon entering site
var reveals = document.querySelectorAll('.revealHeaderJS');
  reveals.forEach(function(e){
    e.classList.add('active');
  });


// Header mouse move parallax effect
document.addEventListener("mousemove", parallax);
  function parallax(e){
    document.querySelectorAll(".mouseMoveParallaxJS").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 50;
    var y = (e.clientY * moving_value) / 50;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    }
  )}


// About section and Footer section scroll appear effect
window.addEventListener('scroll', revealAbout);

  function revealAbout(){
    var reveals = document.querySelectorAll('.revealSectionJS');

    for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      // uncomment else statement to make elements' animations show multiple times
      // else{
      //   reveals[i].classList.remove('active');
      // }
    }}


// Skills section scroll parallax effect
const skillsSection = document.getElementById('parallaxJS');

  window.addEventListener('scroll', function() {
    let scrollY = window.pageYOffset;
    skillsSection.style.backgroundPositionY = -(scrollY * 0.25) + 'px';
  });