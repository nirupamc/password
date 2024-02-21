let eyecon = document.getElementById('eyecon');
let password = document.getElementById('password');

eyecon.onclick = function(){
    if(password.type == "password"){
        password.type = 'text';
        eyecon.src = './img/eye-open.png'
    }else{
        password.type = 'password'
        eyecon.src = './img/eye-close.png'
    }
}