
window.onscroll = () =>{
    let top = window.scrollY+120;
    const sec='#navbar .scrollto';
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


    });

};

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

import { Swiper } from "../swiper/swiper-bundle.min.js";

    
(function(){
 
 
  var nav_sec = document.getElementsByClassName("scrollto");   
  var antes = "";
  for (var i = 0; i < nav_sec.length; i++) {
  
      nav_sec[i].onclick = function(e) {
  
        if(antes!=this.hash){
          e.preventDefault();
          let header = document.querySelector("header");
          let offset = header.offsetHeight;
          let elementPos = document.querySelector(this.hash).offsetTop;
          window.scrollTo({
             
              top: elementPos-offset,
              behavior: 'smooth'
          })

        }
        antes=this.hash;
  
          
  
      }
  
  }
 

  function calula_tela(x1,x2,x3) {
    if (x1.matches) { 
      
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else if(x2.matches){
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    }else if(x3.matches){
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    }else {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 300,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }
  

  var tela = [window.matchMedia("(min-width: 1380px)"),window.matchMedia("(min-width: 1080px)"),window.matchMedia("(min-width: 650px)")]
  

  calula_tela(tela[0],tela[1],tela[2]);

  tela[0].addEventListener("change", function() {
    calula_tela(tela[0],tela[1],tela[2]);
  });
  tela[1].addEventListener("change", function() {
    calula_tela(tela[0],tela[1],tela[2]);
  });
  tela[2].addEventListener("change", function() {
    calula_tela(tela[0],tela[1],tela[2]);
  });

      

})();

// função de envio e controle de formulario
const form = document.querySelector("form");
let inputs = document.getElementById("cont_bra");
let statusTxt = document.getElementById("span_menssagem_user");;
var oldLocation = location;

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");
let msg = document.getElementById("menssage");
let bt_envia = document.getElementById("envia");

function load_click(x){
  if(x==true){
    nome.setAttribute('readonly', x);
    email.setAttribute('readonly', x);
    assunto.setAttribute('readonly', x);
    msg.setAttribute('readonly', x);

  }else{
    nome.removeAttribute('readonly');
    email.removeAttribute('readonly');
    assunto.removeAttribute('readonly');
    msg.removeAttribute('readonly');
  }
 

  
}

function click_bt_envia(x) {
  nome.disabled = x;
  email.disabled = x;
  assunto.disabled = x;
  msg.disabled=x;
  bt_envia.disabled =x;
  load_click(x)
  if(x==false){
    inputs.reset();
    bt_envia.style.pointerEvents = "all";
  }else{
    bt_envia.style.pointerEvents = "none";
  }
}



form.onsubmit = (e) => {

e.preventDefault();


  statusTxt.style.display = "block";
  statusTxt.style.background = "#18d26e";
  statusTxt.innerText = "Estamos enviando sua mensagem.";
  load_click(true);

  form.classList.add("disabled");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "assets/php/envio.php", true);
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
          let response = xhr.response;
          var result = "<?php echo phpFunction() ?>";

          click_bt_envia(true);
          if (response.indexOf("Error:") !== -1 || response.indexOf("E-mail") !== -1 || response.indexOf("Estão") !== -1) {
              
           
            setTimeout(() => {
              statusTxt.style.background = "#ed3c0d";
              statusTxt.innerText = result;
              statusTxt.style.display = "none";
              click_bt_envia(false);
            }, 12000);
              
          } else {
           
            setTimeout(() => {
              statusTxt.style.background = "#18d26e";
              statusTxt.innerText = result;
              statusTxt.style.display = "none";
              click_bt_envia(false);
            }, 12000);
          }
          statusTxt.innerText = response;
         
          
   

      }

    }
    let formData = new FormData(form);
    xhr.send(formData);


}

//fim