function openmenu(){
    document.querySelector(".nav-links").style.display = "block";
  }
  function closemenu(){
    document.querySelector(".nav-links").style.display = "none";
  }
  window.onresize = function(){
      if(window.innerWidth > 600){
        document.querySelector(".nav-links").style.display = "block";
      }else{
        document.querySelector(".nav-links").style.display = "none";
      }
  }












































  
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 1000);
});



gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.text-reveal');

splitTypes.forEach((element, index) => {
    const bg = element.dataset.bgColor;
    const fg = element.dataset.fgColor;

    const text = new SplitType(element, { types: 'words' }); // Splitting into words instead of characters

    gsap.fromTo(text.words,
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.1,
            stagger: 0.02,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        });
});







