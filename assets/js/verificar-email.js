const campoEmail = document.getElementById('email')
const mensagemErro = document.getElementById('erro')
const btnEnviar = document.getElementById('btn-enviar')

const tiposDeErro = [
    'valueMissing',
    'patternMismatch',
    'typeMismatch',
    'tooShort',
]

const mensagens = {
    valueMissing: "O campo do email não pode estar vazio",
    typeMismatch: "Por favor, digite um email válido",
    patternMismatch: "O email não é válido, verifique se o domínio está entre os seguintes: (gmail | hotmail | outlook)(.com | .org | .net)",
    tooShort: 'O email não possui caracteres suficientes'
}

campoEmail.addEventListener('blur', verificarEmail)

function verificarEmail() {
    let mensagem = ""

    tiposDeErro.forEach(erro => {
        if(campoEmail.validity[erro]) {
            mensagem = mensagens[erro];
        }
    })

    const validadorEmail = campoEmail.checkValidity();

    if (!validadorEmail) {
        mensagemErro.textContent = mensagem
        campoEmail.classList.remove('email-campo--valido')
        campoEmail.classList.add('email-campo--invalido')
        btnEnviar.setAttribute("disabled", "")
        // mensagemErro.focus()
    } else {
        btnEnviar.removeAttribute("disabled")
        mensagemErro.textContent = ""
        campoEmail.classList.remove('email-campo--invalido')
        campoEmail.classList.add('email-campo--valido')
        btnEnviar.focus()
    }
}