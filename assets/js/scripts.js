let toggleBtn = document.querySelector('.navbar__toggler'),
listItems = document.querySelector('.nav__items')
toggleBtn.addEventListener('click', ()=>{
    listItems.classList.toggle('active')
})
