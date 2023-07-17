const controls = document.querySelectorAll('#control')
const indicadores = document.querySelectorAll('#indicador')
const items = document.querySelectorAll('.item')

let indicadorBannerAtual = `<span class="escondeVisualmente">(Banner Atual)</span>`

let currentItem = 0
const maxItems = items.length

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('left-arrow')
        const isRight = control.classList.contains('right-arrow')

        if(isLeft) {
            currentItem -= 1
        } else if (isRight) {
            currentItem += 1
        }

        if (currentItem >= maxItems) {
            currentItem = 0
        } else if (currentItem < 0) {
            currentItem = maxItems - 1
        }

        scrollIntoView()
        selecionado()
    })
})

indicadores.forEach(indicador => {
    indicador.addEventListener('click', () => {
        currentItem = parseInt(indicador.dataset.indicador)

        document.querySelector('.indicador .escondeVisualmente').remove()
        indicador.innerHTML += indicadorBannerAtual

        scrollIntoView()
        selecionado()
    })
})

// setInterval(() => {
//     currentItem += 1

//     if (currentItem >= maxItems) {
//         currentItem = 0
//     }

//     scrollIntoView()
//     selecionado()
// }, 5000)

function selecionado() {
    indicadores.forEach(indicador => {
        indicador.classList.remove('selecionado')
        indicadores[currentItem].classList.add('selecionado')
    })
}

function scrollIntoView() {
    items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth"
    })
}

window.onresize = () => {
    items[currentItem].scrollIntoView({
        inline: "center",
    })
}
