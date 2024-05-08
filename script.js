let inputElement = document.querySelectorAll('input')

inputElement.forEach(e=>{
    e.addEventListener('input', (event)=>{
        let parentElem = e.parentElement
       let labelElem =  parentElem.querySelector('label')
        if(!event.target.value.trim() == "" ){
           labelElem.classList.add('focus')
        }else{
            labelElem.classList.remove('focus')
        }
    })
})

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        },
        1400:{
            items:6
        }
    }
})
const getTopScroll = ()=>{
    let scrolltop = window.scrollY
    let goupButton = document.querySelector('.goup')
    if (scrolltop<200){
        goupButton.classList.add('d-none')
        goupButton.classList.remove('d-flex')
        console.log(scrolltop)
    }else{
        goupButton.classList.remove('d-none')
        goupButton.classList.add('d-flex')
    }
}
  
document.addEventListener("scroll", getTopScroll)
    