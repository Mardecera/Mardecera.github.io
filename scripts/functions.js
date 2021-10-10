const $ = (query) => document.querySelector(query)
const $$ = (query) => document.querySelectorAll(query)

function eventButtonMenu() {
    const menuButton = $('.btn__menu')
    const navButtons = $('.nav__buttons')

    menuButton.onclick = () => {
        navButtons.classList.toggle('hide')
        menuButton.classList.toggle('click')
    }
    $$('.nav__buttons ul a').forEach((item) => {
        item.onclick = () => navButtons.classList.add('hide')
    })
}

function eventButtonCV() {
    const cvButton = $('.section__main a')
    cvButton.addEventListener('mouseover', () =>
        cvButton.classList.toggle('hover')
    )
    cvButton.addEventListener('mouseout', () =>
        cvButton.classList.toggle('hover')
    )
}

function eventCarrousel() {
    const carrouselItems = $$('.section__projects .sub__item')

    window.onresize = () => {
        carrouselItems.forEach((item) => {
            item.style.transform = `translateX(0px)`
        })
    }

    $('.section__projects .btn__right').onclick = () => {
        const carrouselWidth = $(
            '.section__projects .sub__carrousel'
        ).offsetWidth
        const topRight = carrouselWidth * (carrouselItems.length - 1)

        carrouselItems.forEach((item) => {
            const nextPos = currentPosX(item) - carrouselWidth
            const currentPos = -nextPos < topRight ? nextPos : -topRight
            item.style.transform = `translateX(${currentPos}px)`
        })
    }

    $('.section__projects .btn__left').onclick = () => {
        const carrouselWidth = $(
            '.section__projects .sub__carrousel'
        ).offsetWidth
        const topLeft = 0

        carrouselItems.forEach((item) => {
            const nextPos = currentPosX(item) + carrouselWidth
            const currentPos = nextPos < topLeft ? nextPos : topLeft
            item.style.transform = `translateX(${currentPos}px)`
        })
    }
}

function loadTheme() {
    const buttonTheme = $('#btn__theme')
    const mainTheme = $('main')
    window.onload = () => {
        const isDark = JSON.parse(localStorage.getItem('themeDark')) || false
        if (isDark) {
            buttonTheme.classList.add('dark')
            mainTheme.classList.add('dark')
        }
    }
    buttonTheme.onclick = () => {
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
    const emoji = 'F0%9F%91%BD'
    const message = `Hola Jonathan, que tal?\nTienes tiempo para charlar sobre una propuesta de trabajo?`
    $('.facebook.no__link').onclick = () => {
        openNewTab('https://www.facebook.com/mardecera.priv/')
    }

    $('.whatsApp.no__link').onclick = () => {
        openNewTab(
            `https://wa.me/51977156464?text=${endodeURI(message)} ${emoji}`
        )
    }
}

function openNewTab(url) {
    window.open(url, '_blank', 'noopener, noreferrer')
}

function currentPosX(item) {
    return parseInt(item.style.transform.slice(11)) || 0
}

export {
    eventButtonMenu,
    eventButtonCV,
    eventCarrousel,
    loadTheme,
    loadHiperLinks,
}
