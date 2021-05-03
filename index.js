let newBtn = document.getElementById('new-logo'),
    oldBtn = document.getElementById('old-logo'),
    logo   = document.querySelector('.logo-panel .logo');

newBtn.addEventListener('focus',()=>{
    logo.style.borderRadius='40%'
});
oldBtn.addEventListener('focus',()=>{
    logo.style.borderRadius='5%'
});
 


