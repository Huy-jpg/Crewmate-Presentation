const slider = document.querySelector('.container'),
      boxSlide = document.querySelector('.box'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      images = document.querySelectorAll('img');

// Counter
let counter = 1;
const size = images[0].clientWidth;

// First style for slider
slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Next Button
nextBtn.addEventListener('click', () =>{
  slider.style.transition = '.8s all ease-in-out'

  if (counter >= images.length - 1) return;
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

// Previous Button
prevBtn.addEventListener('click', () =>{
  slider.style.transition = '.8s all ease-in-out'

  if (counter <= 0) return;
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

// When transition end go back to default position
slider.addEventListener('transitionend', ()=>{
  if(images[counter].id === 'last-clone'){
    slider.style.transition = 'none';
    counter = images.length - 2;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (images[counter].id === 'first-clone'){
    slider.style.transition = 'none';
    counter = images.length - counter;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})