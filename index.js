document.querySelectorAll('.popover-button').forEach(button => {
   button.addEventListener('click', () => {
      button.classList.toggle('popover-button--active')
      const dialog = button.nextElementSibling;
      if (dialog.style.display === 'none' || dialog.style.display === '') {
         dialog.style.display = 'flex';
      } else {
         dialog.style.display = 'none';
      }
   });
});

let menu = document.querySelector('.header__menu')
let menuBtn = document.querySelector('button.header__menu-button')
let img = menuBtn.querySelector('img') 
menuBtn.addEventListener('click', (e) => {
   menu.classList.toggle('header__menu--active')
   if (img.src.endsWith('images/icon-hamburger.svg')) {
      img.src = 'images/icon-close.svg'
   }
   else {
      img.src = 'images/icon-hamburger.svg'
   }
})