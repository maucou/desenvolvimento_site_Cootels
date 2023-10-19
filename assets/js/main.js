const buttonLearnMore1 = document.getElementById('btn-01')
const buttonLearnMore2 = document.getElementById('btn-02')
const buttonLearnMore3 = document.getElementById('btn-03')

const buttonContactUs1 = document.getElementById('contact-btn-01')
const buttonContactUs2 = document.getElementById('contact-btn-02')
const buttonContactUs3 = document.getElementById('contact-btn-03')

// button Learn More
buttonLearnMore1.addEventListener('click', () => {
    let textSpan = document.getElementById('span1')
    textSpan.classList.toggle('expandText')
})

buttonLearnMore2.addEventListener('click', () => {
    let textSpan = document.getElementById('span2')
    textSpan.classList.toggle('expandText')
})

buttonLearnMore3.addEventListener('click', () => {
    let textSpan = document.getElementById('span3')
    textSpan.classList.toggle('expandText')
})

