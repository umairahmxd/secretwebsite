document.querySelector('.topnav a[href="#home"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
  });

  document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
      var text = document.querySelector('#cu-esports-overlay h1');
      var subText = document.querySelector('#cu-esports-overlay p');
      text.style.transition = "opacity 2s";
      subText.style.transition = "opacity 2s";
      text.style.opacity = 0;
      subText.style.opacity = 0;
  
      var overlay = document.getElementById('cu-esports-overlay');
      overlay.style.transition = "opacity 2s";
      overlay.style.opacity = 0;
  
      overlay.addEventListener('transitionend', function() {
        overlay.parentNode.removeChild(overlay);
      });
  
    }, 2000);
  });

  document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.getElementById('about');
    var aboutContent = document.querySelector('.about-content');
  
    function fadeInElement(element) {
      element.classList.add('fade-in');
    }
  
    function checkScroll() {
      var aboutSectionPosition = aboutSection.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (aboutSectionPosition < windowHeight / 1.5) {
        fadeInElement(aboutContent);
      }
    }
  
    window.addEventListener('scroll', checkScroll);
  });
  