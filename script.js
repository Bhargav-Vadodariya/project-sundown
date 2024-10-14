const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
});

  var elemC = document.querySelector('.elem-con');
  var fixed = document.querySelector('.fixed-image');
  elemC.addEventListener('mouseenter', function (e) {
    fixed.style.display = 'block';
  });
  elemC.addEventListener('mouseleave', function (e) {
    fixed.style.display = 'none';


  });
 var elems = document.querySelectorAll('.elem');
 elems.forEach(function (e) {
  e.addEventListener('mouseenter', function (){
    var image = e.getAttribute('data-image')
    fixed.style.backgroundImage =  `url(${image})`
  })
})
  
var desc       = document.querySelector('.desc');
var design     = document.querySelector('#design');
var Design     = document.querySelector('#Design');
var project    = document.querySelector('#Project');
var execution  = document.querySelector('#Execution');
var image      = document.querySelector('#page4-img');

Design.addEventListener('click', function () {
  desc.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
  var add = Design.getAttribute("data-img");
  image.setAttribute('src',`${add}`);
  project.style.right = "0vw";
  Design.style.right = '-2vw';
  design.style.color = '#EFEAE3';
  execution.style.right = '0vw';
  execution.style.color = '#504A45';
  project.style.color = '#504A45';
})
project.addEventListener('click', function () {
  desc.textContent = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.'
  var add = project.getAttribute("data-img");
  image.setAttribute('src',`${add}`);
  project.style.right = '-2vw';
  project.style.color = '#EFEAE3';
  Design.style.right = '0vw';
  design.style.color = '#504A45';
  execution.style.right = '0vw';
  execution.style.color = '#504A45';
})
execution.addEventListener('click', function () {
  desc.textContent =  "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
  var add = execution.getAttribute("data-img");
  image.setAttribute('src',`${add}`);
  project.style.right = '0vw';
  project.style.color = '#504A45';
  Design.style.right = '0vw';
  design.style.color = '#504A45';
  execution.style.right = '-2vw';
  execution.style.color = '#EFEAE3';
});

//  <!-- Initialize Swiper -->

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      
    });

function loaderAnimation() {
  var loader = document.querySelector('.loader');
  setTimeout(function () {
    loader.style.top = '-100%';
  }, 4200);
  console.log(loader);
}
loaderAnimation();