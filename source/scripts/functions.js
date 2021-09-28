const $ = query => document.querySelector(query)
const $$ = query => document.querySelectorAll(query)

const cvButton = $('.section__main a')
const menuButton = $('.btn__menu')
const closeButton = $('.btn__close')
const navButtons = $('.nav__buttons')

menuButton.onclick = () => navButtons.classList.toggle('hide')
closeButton.onclick = () => navButtons.classList.toggle('hide')
cvButton.addEventListener('mouseover', () =>  cvButton.classList.toggle('hover'))
cvButton.addEventListener('mouseout', () => cvButton.classList.toggle('hover'))

const buttonRight = $('.section__projects .btn__right')
const buttonLeft = $('.section__projects .btn__left')
const carrouselItems = $$('.section__projects .sub__item')

window.onresize = _ => {
    carrouselItems.forEach(item => {
        item.style.transform = `translateX(0px)`
    })
}

buttonRight.onclick = () => {
    const carrouselWidth = $('.section__projects .sub__carrousel').offsetWidth
    const topRight = carrouselWidth * (carrouselItems.length - 1)

    carrouselItems.forEach(item => {
        const nextPos = currentPosX(item) - carrouselWidth
        const currentPos = -nextPos < topRight? nextPos : -topRight
        item.style.transform = `translateX(${ currentPos }px)`
    })
}

buttonLeft.onclick = () => {
    const carrouselWidth = $('.section__projects .sub__carrousel').offsetWidth
    const topLeft = 0

    carrouselItems.forEach(item => {
        const nextPos = currentPosX(item) + carrouselWidth
        const currentPos = nextPos < topLeft ? nextPos : topLeft
        item.style.transform = `translateX(${ currentPos }px)`
    })
}

function currentPosX(item) {
    return parseInt(item.style.transform.slice(11)) || 0
}