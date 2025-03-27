if (window.innerWidth < 768) {
    new Swiper('.swiper', {
      // Параметры
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1.3,
    
      // Пагинация
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
    });}
  
    const swiper_css = document.querySelector('link[href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"]');
  
  function switcherCSS() {
    if (window.innerWidth > 768) { 
      swiper_css.disabled = true; 
    } else {
      swiper_css.disabled = false; 
    }
  }
  
window.addEventListener('DOMContentLoaded', switcherCSS);
window.addEventListener('resize', switcherCSS);

let main__link = document.querySelector('.main__link');
let main__expand = document.querySelector('.main__expand');
let main__expand_rotated = document.querySelector('.main__expand--rotated');
let main__showall = document.querySelector('.main__showall');
let hidden = document.querySelectorAll('.main__item--hidden');
let hidden_add = document.querySelector('.main__item--hidden-add');

main__showall.addEventListener('click', function(e) {
  e.preventDefault();

  const isShown = main__showall.classList.toggle('main__hide');
  if (isShown) {

    hidden.forEach(el =>
      el.style.display = 'flex');
    hidden_add.style.display = 'flex';
    main__link.textContent = 'Скрыть';
    main__expand.classList.toggle('main__expand--rotated');
    main__showall.style.width = '90px';
  } else {
    
    hidden.forEach(el =>
      el.style.display = 'none');
    hidden_add.style.display = 'flex';
    main__link.textContent = 'Показать все';
    main__expand.classList.toggle('main__expand--rotated');
    main__showall.style.width = '124px';
  }
});
