//javascript para slider navigation manual
const btns=document.querySelectorAll(".nav-btn");
const slides=document.querySelectorAll(".imagen-slider");
const contents=document.querySelectorAll(".texto-slider");

var sliderNav= function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active")
    });

    slides.forEach((slide)=>{
        slide.classList.remove("active")
    });

    contents.forEach((content)=>{
        content.classList.remove("active")
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}


btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    });
    
});

// window.addEventListener("load",function()=>{
//     function cambiarImagen() {
//         sliderNav(contador);
//     }
    
// });





