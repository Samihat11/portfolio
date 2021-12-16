const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelectorAll('.nav-item')

const menuToggleHandler = () => {
    mainNav.classList.toggle('toggled');
    navToggle.classList.toggle('active');

    nav.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        }else{
        link.style.animation = `navListFade 0.5s ease forwards ${index / 7}s`
        }
    })
    const visible = mainNav.getAttribute('data-visible');
    if (visible === 'true') {
      mainNav.setAttribute('data-visible', false);
    //   mainNav.classList.remove('toggled');

    }
}


navToggle.addEventListener('click', menuToggleHandler);
//   const visible = mainNav.getAttribute('data-visible');
//   if (visible === 'false') {
//     mainNav.setAttribute('data-visible', true);
//     navToggle.setAttribute('aria-expanded', true);
//   } else {
//     mainNav.setAttribute('data-visible', false);
//     navToggle.setAttribute('aria-expanded', false);
//   }
