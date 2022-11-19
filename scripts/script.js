var typed = new Typed('#typed', {
  strings: ["^2000 Seja bem vindo!", "O tenis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."],
  typeSpeed: 40
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 5500,
  reset: true
});

ScrollReveal().reveal('.header p', { delay: 200 });
ScrollReveal().reveal('.header h3', { delay: 400 });

ScrollReveal().reveal('#home .image', { delay: 200 });
ScrollReveal().reveal('#home .text', { delay: 600 });

ScrollReveal().reveal('#spotlight .text', { delay: 600 });

ScrollReveal().reveal('.shoe', { delay: 800 });
ScrollReveal().reveal('.footer', { delay: 800 });
