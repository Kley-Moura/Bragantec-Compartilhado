
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
    /**
    * carregando
    */
    let load_anima = selecionado('#anima');
    if (load_anima) {
        window.addEventListener('load', () => {
            load_anima.remove()
        });
    }



    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = selecionado('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY+20000;
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

