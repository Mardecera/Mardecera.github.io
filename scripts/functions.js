const $ = (query) => document.querySelector(query)
$('#switch__theme').onclick = () => {
    $('#switch__theme').classList.toggle('active')
    $('main').classList.toggle('dark')
}
$('.bar__close').onclick = () => {
    $('.nav__sections').classList.toggle('hidden')
}

$('.nav__bar').onclick = () => {
    $('.nav__sections').classList.toggle('hidden')
}

const $$ = (item) => document.querySelectorAll(item)
$('.skill__frontend .skill__tab').onclick = () => {
    $('.skill__frontend .skill__details').classList.toggle('hidden')
}
$('.skill__backend .skill__tab').onclick = () => {
    $('.skill__backend .skill__details').classList.toggle('hidden')
}
$('.skill__desing .skill__tab').onclick = () => {
    $('.skill__desing .skill__details').classList.toggle('hidden')
}

$('#web__top').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function openNewTab(url) {
    window.open(url, '_blank', 'noopener, noreferrer')
}

function loadHiperLinks() {
    const message = `Hola Jonathan, que tal?\nTienes tiempo para charlar sobre una propuesta de trabajo? 👽`

    $('.whatsApp.no__link').onclick = () => {
        const uri = `https://wa.me/51977156464?text=${encodeURI(message)}`
        openNewTab(uri)
    }
}

loadHiperLinks()
