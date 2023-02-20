//variables 
const menuBtn = document.querySelector('.menu-btn');
const navtoggle = document.querySelector('.nav');
const links = document.querySelectorAll('.links-act a')
const header = document.querySelector("header");

//mostrar y ocultar menú lateral
menuBtn.onclick = () =>{
        menuBtn.classList.toggle('open');
        navtoggle.classList.toggle('active');

};

//cambio de color del header
window.onscroll = ()=>{
    header.classList.toggle('sticky',window.scrollY > 40)
 
}

//active links
const observer = new IntersectionObserver( entries =>{
    entries.forEach(entry =>{
const id = entry.target.getAttribute("id")
const menuLink = document.querySelector(`.lista-links a[href="#${id}"]`)
if (entry.isIntersecting) {
    document.querySelector('.lista-links a.selected').classList.remove('selected');
    menuLink.classList.add('selected')
}
    })
},{rootMargin:"-50% 0px -50% 0px"})


//ocultar menú lateral al seleccionar links
links.forEach(element => {
    element.onclick = () =>{
        menuBtn.classList.remove('open');
        navtoggle.classList.remove('active');
    }
    const hash = element.getAttribute("href"),
    target = document.querySelector(hash);
    observer.observe(target)
});

