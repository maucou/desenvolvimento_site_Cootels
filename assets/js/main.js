const buttonLearnMore1 = document.getElementById('btn-01')
const buttonLearnMore2 = document.getElementById('btn-02')
const buttonLearnMore3 = document.getElementById('btn-03')

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