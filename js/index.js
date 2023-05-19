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
