const openOffcanvas = document.querySelector('.open-offcanvas');//offcanvas acma iconu
const closeOffcanvas = document.querySelector('.close-offcanvas');//offcanvas kapatma iconu

const offcanvasMenu = document.querySelector('.offcanvas');


//openOffcanvas acma iconuna tiklaninca calisan bir addEventListener ozellgii
openOffcanvas.addEventListener('click', function(){//zaten bu fonk.a tikaldigimda çalışacağı için isim vermedik
    console.log('OPEN offcanvas iconuna TIKLANDI')
    offcanvasMenu.style.cssText='left:0%; transition: ease .7s;'
})

//closeOffcanvas yani kapatma iconun tiklaninca calisan bir addEventListener ozellgii
//closeOffcanvas yani kapatma iconun tiklaninca calisan bir addEventListener ozellgii
closeOffcanvas.addEventListener('click', function(){
    console.log('CLOSE offcanvas iconuna tiklandi')
    offcanvasMenu.style.cssText = 'left: -50%; transition: ease .7s;'
})

//offcanvas icindeki a etiketi icindeki i iconu icin sadece
const offCanvasSubmenuIcon = document.querySelector('.offcanvas-middle a i')
const offCanvasSubmenu = document.querySelector('.submenu')//icona tiklaninca acilacak olan class

offCanvasSubmenuIcon.addEventListener('click', function(){
    console.log('OFFCANVAS ICINDEKI ICONA TIKLANDI');
    //offCanvasSubmenu display flex ise 
    if (offCanvasSubmenu.style.display === 'flex') {
        console.log('IF')
        //offCanvasSubmenu display flex ise none yap 
        offCanvasSubmenu.style.display='none'
    }else{
        console.log('ELSE')
        //offCanvasSubmenu display none ise flex yap 
        offCanvasSubmenu.style.display='flex'
    }
})

//headermain menu icin tıklayacağımız icon
const openMainmenuIcon =  document.querySelector('.for-mainmenu .fa-bars')
//tıklanınca acılacak olan maınmenu
const openMainMenu = document.querySelector('.for-mainmenu .mainmenu');

//header-main classi icindeki mainmenu iconuna tıklanınca
openMainmenuIcon.addEventListener('click', function(){
    console.log('openMainmenu ICINDEKI ICONA TIKLANDI')
    console.log('openMainMenu.style.display',openMainMenu.style.display,'+')
    if (openMainMenu.style.display === 'flex') {
        openMainMenu.style.display = 'none'
    }else{
        openMainMenu.style.display = 'flex'

    }
})


/* SWIPPER JS KODLARI */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });