const $ = (query) => document.querySelector(query)

const contactmeForm = $('#contactme')

contactmeForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let myForm = document.getElementById('contactme')
    let formData = new FormData(myForm)
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log('Form successfully submitted'))
        .catch((error) => alert(error))
})
