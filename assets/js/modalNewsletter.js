import abrirModal from "./modalBase.js"

const btnEnviar = document.getElementById('btn-enviar')
const campoEmail = document.getElementById('email')
const textoHeader = document.querySelector('#headerTextoNews')
const textoBody = document.querySelector('.modalNewsletter__descricao')

var listaEmail = JSON.parse(localStorage.getItem("email"))
if (listaEmail == null) {
    listaEmail = []
}

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    cadastro()
    abrirModal('modalNewsletter')
    textoHeader.focus()
})

function cadastro() {
    const valorEmail = campoEmail.value

    if (listaEmail.indexOf(valorEmail) == -1) {
        textoHeader.textContent = "E-mail cadastrado com sucesso!"
        textoBody.textContent = "Em breve você receberá novidades exclusivas da Meteora."

        listaEmail.push(valorEmail)
        localStorage.setItem('email', JSON.stringify(listaEmail))
        console.log(listaEmail)
    } else {
        textoHeader.textContent = "Email já cadastrado"
        textoBody.textContent = `O email ${valorEmail} já está cadastrado em nosso banco de dados`
    }

    campoEmail.value = ""
}