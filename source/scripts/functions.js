const $ = query => document.querySelector(query)
const $$ = query => document.querySelectorAll(query)

function eventButtonMenu() {
    const menuButton = $('.btn__menu')
    const closeButton = $('.btn__close')
    const navButtons = $('.nav__buttons')

    menuButton.onclick = () => navButtons.classList.toggle('hide')
    closeButton.onclick = () => navButtons.classList.toggle('hide')
    $$('.nav__buttons ul a').forEach(item => {
        item.onclick = _ => navButtons.classList.add('hide')
    })
}

function eventButtonCV() {
    const cvButton = $('.section__main a')
    cvButton.addEventListener('mouseover', () =>  cvButton.classList.toggle('hover'))
    cvButton.addEventListener('mouseout', () => cvButton.classList.toggle('hover'))
}

function eventCarrousel() {
    const carrouselItems = $$('.section__projects .sub__item')
    
    window.onresize = _ => {
        carrouselItems.forEach(item => {
            item.style.transform = `translateX(0px)`
        })
    }
    
    $('.section__projects .btn__right').onclick = () => {
        const carrouselWidth = $('.section__projects .sub__carrousel').offsetWidth
        const topRight = carrouselWidth * (carrouselItems.length - 1)
    
        carrouselItems.forEach(item => {
            const nextPos = currentPosX(item) - carrouselWidth
            const currentPos = -nextPos < topRight? nextPos : -topRight
            item.style.transform = `translateX(${ currentPos }px)`
        })
    }
    
    $('.section__projects .btn__left').onclick = () => {
        const carrouselWidth = $('.section__projects .sub__carrousel').offsetWidth
        const topLeft = 0
    
        carrouselItems.forEach(item => {
            const nextPos = currentPosX(item) + carrouselWidth
            const currentPos = nextPos < topLeft ? nextPos : topLeft
            item.style.transform = `translateX(${ currentPos }px)`
        })
    }
}

function loadTheme(){
    const buttonTheme = $('#btn__theme')
    const mainTheme = $('main')
    window.onload = _ => {
        const isDark = JSON.parse(localStorage.getItem('themeDark')) || false
        if (isDark) {
            buttonTheme.classList.add('dark')
            mainTheme.classList.add('dark')
        }
    }
    buttonTheme.onclick = _ => {
        buttonTheme.classList.toggle('dark')
        mainTheme.classList.toggle('dark')
        if (mainTheme.classList.contains('dark')) {
            localStorage.setItem('themeDark', true)
        } else {
            localStorage.setItem('themeDark', false)
        }
    }
}

function loadHiperLinks() {    
    $('.facebook.no__link').onclick = _ => {
        openNewTab( "https://www.facebook.com/mardecera.priv/" );
    }
    
    $('.whatsApp.no__link').onclick = _ => {
        openNewTab( "https://wa.me/51977156464?text=Hola%2C%20Jonathan%2C%20que%20tal%3F%0ATienes%20tiempo%20para%20charlar%20sobre%20una%20propuesta%20de%20trabajo%3F%20%F0%9F%91%BD" );
    }
}

function openNewTab(url) {
    window.open( url, "_blank", "noopener, noreferrer" );
}

function currentPosX(item) {
    return parseInt( item.style.transform.slice(11) ) || 0
}

export { eventButtonMenu, eventButtonCV, eventCarrousel, loadTheme, loadHiperLinks }