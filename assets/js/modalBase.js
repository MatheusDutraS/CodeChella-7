const btnFechar = document.querySelectorAll('#fechar')
const modais = document.querySelectorAll('#modal')
const overlay = document.getElementById('overlay')

let ultimoElementoFocado = ""
let primeiroFocoModal = ""
let ultimoFocoModal = ""

btnFechar.forEach(btn => {
    btn.addEventListener('click', fecharModal)
})
overlay.addEventListener('click', fecharModal)
document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      fecharModal()
    }
})

function fecharModal() {
    modais.forEach(modal => {
        if (modal.style.display == 'block') {
            modal.style.display = 'none'
        }
    })
    overlay.style.display = 'none'
    document.documentElement.style.overflow = 'auto';
    ultimoElementoFocado.focus()
}

export default function abrirModal(classe) {
    ultimoElementoFocado = document.activeElement

    modais.forEach(modal => {
        if (modal.classList.contains(classe)) {
            modal.style.display = 'block';

            modal.addEventListener('keydown', mudarFoco)
        }
    })
    overlay.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
    
    verificarModal(classe)
}

function mudarFoco(event) {
    var KEY_TAB = 9

    function handleBackwardTab() {
        if (document.activeElement === primeiroFocoModal) {
            console.log(document.activeElement === primeiroFocoModal) 
            console.log("Fui para o final")
            event.preventDefault()
            ultimoFocoModal.focus()
        }
    }
    
    function handleForwardTab() {
        if (document.activeElement === ultimoFocoModal) {
            console.log(document.activeElement === ultimoFocoModal)
            console.log("Fui para o inicio")
            event.preventDefault()
            primeiroFocoModal.focus()
        }
    }

    switch(event.keyCode) {
        case KEY_TAB:
            if ( event.shiftKey ) {
                handleBackwardTab();
            } else {
                handleForwardTab();
            }
            break;
        default:
        break;
    }
}

function verificarModal(classe) {
    if (classe == "modalNewsletter") {
        primeiroFocoModal = document.getElementById("headerTextoNews")
        ultimoFocoModal = btnFechar[1]
    
    } else {
        primeiroFocoModal = document.getElementById("headerTextoProduto")
        ultimoFocoModal = document.querySelector(".detalhes__botao")
        console.log(primeiroFocoModal)
        console.log(ultimoFocoModal)
    }
}