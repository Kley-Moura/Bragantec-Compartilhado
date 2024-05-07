/*
(function () {


    const selecionado = (tag, all = false) => {
        tag = tag.trim()
        console.log(tag)
        if (all) {
            return [...document.querySelectorAll(tag)]
        } else {
            return document.querySelector(tag)
        }
    }
   
    * carregando
    
    let load_anima = selecionado('#anima');
    if (load_anima) {
        window.addEventListener('load', () => {
            load_anima.remove()
        });
    }



    
     * Easy on scroll event listener 
     
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    
     * Navbar links active state on scroll
     
    let navbarlinks = selecionado('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY+200;
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = selecionado(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

  




})()

*/

import { Swiper } from "../swiper/swiper-bundle.min.js";
Swiper();



window.onscroll = () =>{
    let top = window.scrollY+200;
    sec='#navbar .scrollto';
    let sections = document.querySelectorAll(sec.trim());
    sections.forEach(sec =>{
        
        
        
        if (!sec.hash) return
        let section = document.querySelector(sec.hash)
        if (!section) return
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        if(top >= offset && top < (offset + height)){
            sec.classList.add('active')
        }else{
            sec.classList.remove('active')
        }
/*
        if(top >= offset && top < (offset + height)){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                console.log(document.querySelector('header nav a [href*='+id+']'));
                links.classList.add('active');
            });

        };*/

    });

};

/*
const navbarlinksActive = () => {
    let position = window.scrollY+20000;
    navbarlinks.forEach(navbarlink => {
        console.log()
        if (!navbarlink.hash) return
        let section = selecionado(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}*/

    


document.getElementById("EX_passo1").addEventListener("click", function(){
    document.querySelector(".popup1").classList.add("active");
    document.body.classList.add('hide');
    document.querySelector(".navbar-toggler").disabled = true;
    
    document.getElementById("logo_home").style.opacity = 0.6;
    document.getElementById("logo_home").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.6;
    document.getElementById("navbar").style.pointerEvents = "none";

    
})

document.querySelector(".popup1 .fecha-bt").addEventListener("click", function(){
   document.querySelector(".popup1").classList.remove("active");
   document.body.classList.remove('hide');
   document.querySelector(".navbar-toggler").disabled = false;
   

   document.getElementById("logo_home").style.opacity = 1;
    document.getElementById("logo_home").style.pointerEvents = "all";
    document.getElementById("navbar").style.opacity = 1;
    document.getElementById("navbar").style.pointerEvents = "all";
})


/*
  

  const swiper = new Swiper('.slides-1', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    
      
      new Swiper('.slides-3', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40
          },
    
          1200: {
            slidesPerView: 3,
          }
        }
      });
    
      
      new Swiper('.gallery-slider', {
        speed: 400,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }
      });*/



