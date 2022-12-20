const menuElement = document.getElementById('menu');
const iconElement = document.getElementById('icon');

iconElement.addEventListener('click', (event)=>{
    menuElement.classList.toggle('menu--show');

    if(event.target.dataset.image === 'hamburger'){
        event.target.src = 'assets/images/shared/mobile/close.svg';
        event.target.dataset.image = 'close';
    }
    else{
        event.target.src = 'assets/images/shared/mobile/menu.svg';
        event.target.dataset.image = 'hamburger'
    }

})