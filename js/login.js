const form = document.querySelector('.login-form');//form etiketi

const usernameInput = document.getElementById('username');//input id si username olan
const passwordInput = document.getElementById('password');//input id si password olan

const usernameError= document.querySelector('#error-username');
const passwordError= document.querySelector('#error-password');


const buttonRegister = document.querySelector('.btn-register');

//keydown basinca çalışır
//keyup tuştan elimizi kaldırınca çalışır
document.addEventListener('keydown',function(e){
    if (e.key==="Enter") {
        console.log('a BASILDI')
    }
})
/* 
 JSON verisi = localStroge bu kurallara göre saklanır
 { //localStrogetan javascript olarak veri alinirken JSON.parse() = stringe cevirir
  "name": "John",
  "age": 30,
  "city": "New York"
}
Javascript objesindeki kullanıl biçimi
{
 javascript localStroge olarak veri alinirken JSON.stringfy() => obje ceviriyor
    name: "John",
    age: 30,
    city: "New York"
}
*/
let users = JSON.parse(localStorage.getItem('users')) || [];
// console.log('users DEGERI=>',JSON.parse(localStorage.getItem('users')))
console.log('users DEGERI=>' , users)


form.addEventListener('submit', function(e){//form submit etme islemi
    //submit edildiginde icindeki isimisiz fonk. çalışacak
    e.preventDefault();//asenkron islem

    /* console.log('usernameInput',usernameInput.value)
    console.log('passwordInput',passwordInput.value) */

    if (usernameInput.value ==='') {
        usernameError.style.color='red'
        usernameInput.focus()//focuslanir usernameInputuna
    }else usernameError.style.color='transparent'
    if (passwordInput.value==='') {
        passwordError.style.color='red'
        passwordInput.focus()
    }else passwordError.style.color='transparent'

    if(usernameInput.value ==='' && passwordInput.value===''){
        return
    }
    console.log('IKISIDE DOLU OLDUĞU İÇİN DEVAM ETTİ')

    switch (usernameInput.value) {
        case usernameInput.value ==='':
            console.log('usernameInput')
            return;
        case passwordInput.value ==='':
            console.log('passwordInput bos')
            
            return;
    
        default:
            break;
    }


})

//KAYIT OL BUTONUNA TIKLANINCA
buttonRegister.addEventListener('click',function(){
    console.log('buttonRegister a tiklandi')
    window.location.href='register.html'
})


console.log('CEVAP',5==6)