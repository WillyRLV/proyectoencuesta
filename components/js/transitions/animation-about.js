
// animacion para la parte principal
ScrollReveal().reveal('.contenedor-img', {  delay: 375,
    duration: 1000,
    reset: true,
    origin:'right',
    distance:'300px'});



ScrollReveal().reveal('.contenedor-img img', {
    delay: 600,
     duration: 1000,
     reset: true,
     origin:'left',
     distance:'300px'
 });



ScrollReveal().reveal('.contenedor-datos', {
    delay: 375,
    duration: 1000,
    reset: true,
    origin:'top',
    distance:'300px'
});

ScrollReveal().reveal('.div-about-two', {
    delay: 375,
    duration: 1000,
    reset: true,
    origin:'top',
    distance:'300px'
});

// animacion pra titulos intermedios


// animacion tarjetas 1

// for (let i = 1; i <= 3; i++) {
    
//     ScrollReveal().reveal(`.about-three-card:nth-child(${i})`, {
//         delay:375,
//         duration: 1000,
//       distance:'500px',
//       origin:'left',
//       reset:true
//     });
    
// }

ScrollReveal().reveal('.about-three-card:nth-child(1)', {
    delay:300,
    duration: 700,
  distance:'500px',
  origin:'left',
  reset:true
});
ScrollReveal().reveal('.about-three-card:nth-child(2)', {
    delay:500,
    duration: 700,
  distance:'500px',
  origin:'left',
  reset:true
});
ScrollReveal().reveal('.about-three-card:nth-child(3)', {
    delay:700,
    duration: 700,
  distance:'500px',
  origin:'left',
  reset:true
});

ScrollReveal().reveal('.design-global', {
    delay:300,
    duration: 700,
  distance:'500px',
  origin:'left',
  reset:true
});




