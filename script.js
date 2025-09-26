// script.js
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,     
    spaceBetween: 30,
    loop: true,          
    speed: 3000,          
    autoplay: {
      delay: 1,           
      disableOnInteraction: false,
    },
    breakpoints: {        
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});
