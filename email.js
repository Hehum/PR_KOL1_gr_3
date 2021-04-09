let email = document.getElementById("email");
let temat = document.getElementById("temat");
let wiadomosc = document.getElementById("wiadomosc");
let przycisk = document.querySelector('#przycisk');
let reset = document.querySelector('#reset');
let counter = 1;

przycisk.addEventListener("click",function(){
    
wiad.innerHTML = 'Email:    ' + email.value + '<br/>' + 'Temat:     ' + temat.value + '<br/>' + 'Wiadomość:     ' + wiadomosc.value + '</br> Została wysłana';
licznik.innerHTML = counter++;
});

reset.addEventListener("click",function(){
email.value='';
temat.value='';
wiadomosc.value='';
wiad.innerHTML = '';
});

