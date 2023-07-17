import abrirModal from "./modalBase.js"

export default function criarModal() {
    const btnProduto = document.querySelectorAll('.descricao__link')
    const textoHeader = document.getElementById('headerTextoProduto')

    btnProduto.forEach(btn => {
        btn.addEventListener('click', () => {
            const imagemProduto = btn.parentNode.parentNode.firstElementChild.getAttribute('src')
            const imagem = document.querySelector('.modalProduto__imagem')
            imagem.setAttribute('src', imagemProduto)

            const nomeProduto = btn.parentNode.children[0].textContent
            const nome = document.querySelector('.modalProduto__titulo')
            nome.textContent = nomeProduto
            
            const textoProduto = btn.parentNode.children[1].textContent
            const texto = document.querySelector('.modalProduto__texto')
            texto.textContent = textoProduto
            
            const precoProduto = btn.parentNode.children[2].textContent
            const preco = document.querySelector('.modalProduto__preco')
            preco.textContent = precoProduto
            

            const cores = btn.parentNode.dataset.cores.split(',')
            const tamanhos = btn.parentNode.dataset.tamanhos.split(',')

            let opcoesCores = ""
            
            for (let i = 0; i < cores.length; i++) {
                const opcao = `
                <li class="opcao">
                    <input type="radio" id="${cores[i]}" name="cor" value="${cores[i]}" aria-labelledby="cor${i}">
                    <label for="${cores[i]}" id="cor${i}">${cores[i]}</label>
                </li>`

                opcoesCores += opcao
            }
            
            const containerCores = document.getElementById('cores')
            containerCores.innerHTML = opcoesCores
            
            let opcoesTamanhos = ""

            for (let i = 0; i < tamanhos.length; i++) {
                const opcao = `
                <li class="opcao">
                    <input type="radio" id="${tamanhos[i]}" name="tamanhos" value="${tamanhos[i]}" aria-labelledby="tamanho${i}">
                    <label for="${tamanhos[i]}" id="tamanho${i}">${tamanhos[i]}</label>
                </li>`

                opcoesTamanhos += opcao
            }
            const containerTamanhos = document.getElementById('tamanhos')
            containerTamanhos.innerHTML = opcoesTamanhos

            abrirModal('modalProduto')
            textoHeader.focus()
        })
    })
}
