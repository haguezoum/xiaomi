let newBtn = document.getElementById('new-logo');
let oldBtn = document.getElementById('old-logo');
let logo   = document.querySelector('.logo-panel .logo');

newBtn.addEventListener('focus',()=>{
    logo.style.borderRadius='40%'
});
oldBtn.addEventListener('focus',()=>{
    logo.style.borderRadius='5%'
});
 


