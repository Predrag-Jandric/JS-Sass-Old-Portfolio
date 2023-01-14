
// Open/close mobile menu
const navBtn = document.getElementById("hamburger");
const navList = document.getElementById('nav-list');

navBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});


// Header section appear effect
var reveals = document.querySelectorAll('.revealHeaderJS');
reveals.forEach(function(el){
    el.classList.add('active');
});


// About section appear effect
window.addEventListener('scroll', revealAbout);

  function revealAbout(){
    var reveals = document.querySelectorAll('.revealAboutJS');

    for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      // remove else statement to make element show only once and it WONT repeat animation again
      else{
        reveals[i].classList.remove('active');
      }
    }
  }

  // Skills section parallax effect
const skillsSection = document.getElementById('parallaxJS');

  window.addEventListener('scroll', function() {
    let scrollY = window.pageYOffset;
    skillsSection.style.backgroundPositionY = -(scrollY * 0.2) + 'px';
  });
    


// alternative hamburger
// const hamburger = document.querySelector('.hamburger');

// hamburger.addEventListener('mouseover', () => {
//   hamburger.classList.add('active');
// });

// hamburger.addEventListener('mouseout', () => {
//   hamburger.classList.remove('active');
// });

