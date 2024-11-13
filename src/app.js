const accitems = document.querySelectorAll('.acc-item')

accitems.forEach(accItem =>{
    accItem.addEventListener('click',()=>{
        accItem.classList.toggle("open")
        accItem.classList.toggle("close")
    })
})