let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let slider = document.querySelector('.slider')


let index = 1

prev.addEventListener('click', function () {
    console.log("click prev")
    if (index === 2) {
        index = 0
        slider.style.transform = `translateX(-${index * 100}%)`
    } else {
        index = index + 1
        slider.style.transform = `translateX(-${index * 100}%)`
        
    }
})

next.addEventListener('click', function () {
    console.log("click next")
    
    if (index === 0) {
        index = 2
        slider.style.transform = `translateX(-${index * 100}%)`
    }
    else {
        index = index - 1
        slider.style.transform = `translateX(-${index * 100}%)`
        
    }
})


// -----------------
var splide = new Splide( '.splide', {
    perPage: 2,
    perMove: 1,
    gap    : '2rem',
    padding : { left: '0rem', right: '10rem' },
    arrows:false,    
    breakpoints: {
      640: {
        perPage: 1,
        gap    : '.7rem',
        padding : { left: '0rem', right: '9rem' },
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
        padding : { left: '0rem', right: '6rem' },
      },
    },
  } );
  
  splide.mount();