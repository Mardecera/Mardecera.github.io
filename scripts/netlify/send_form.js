const MESSAGE =
    'Thanks for writing to me, I will answer you as soon as possible. ✌'
const $ = (query) => document.querySelector(query)

const contactmeForm = $('#contactme')

contactmeForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    let myForm = document.getElementById('contactme')
    let formData = new FormData(myForm)
    const buttonSubmit = myForm.querySelector('#submit')
    try {
        loadButton(buttonSubmit)
        await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
        sendButton(buttonSubmit)
        notificacionPopup(MESSAGE, 'success')
        contactmeForm.reset()
    } catch (error) {
        notificacionPopup(error, 'error')
    }
})

function loadButton(button) {
    cleanerElement(button)
    const loaderDiv = document.createElement('div')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    loaderDiv.classList.add('lds-ellipsis')
    loaderDiv.appendChild(div1)
    loaderDiv.appendChild(div2)
    loaderDiv.appendChild(div3)
    loaderDiv.appendChild(div4)
    button.appendChild(loaderDiv)
}

function cleanerElement(element) {
    while (element.lastChild) element.firstChild.remove()
}

function sendButton(button) {
    cleanerElement(button)
    const i = document.createElement('i')
    i.classList.add('fas', 'fa-paper-plane')
    button.textContent = 'Send'
    button.appendChild(i)
}

function notificacionPopup(message, type) {
    const i = document.createElement('i')
    const element = document.querySelector('main')
    const template = document.querySelector('#template__notification').content
    const iconWrapper = template.querySelector('.notification__icon')

    template.querySelector('.notification__message').textContent = message
    cleanerElement(iconWrapper)
    if (type === 'success') {
        i.classList.add('fas', 'fa-check')
    } else if (type === 'error') {
        i.classList.add('fas', 'fa-ban')
    }
    iconWrapper.appendChild(i)
    const clone = template.cloneNode(true)
    const closeButton = clone.querySelector('#popup__close')
    closeButton.onclick = () => {
        document
            .querySelector('#notification__popup')
            .classList.add('invisible')
        setTimeout(() => {
            document.querySelector('#notification__popup').remove()
        }, 1500)
    }
    element.appendChild(clone)
}
