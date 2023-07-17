import { fetchProduto, cardsProduto, cardsTitulo } from "./card-produto.js"

const cardsCategoria = document.querySelectorAll('.card-categoria')

cardsCategoria.forEach(card => {
    card.addEventListener('click', () => {
        const categoria = card.dataset.categoria
        const categoriaUrl = `http://localhost:3000/${categoria}`

        cardsTitulo.innerHTML = `Categoria: ${card.children[1].textContent} <span class="escondeVisualmente"> Lista de produtos.</span>`
        cardsProduto.innerHTML = ""
        fetchProduto(categoriaUrl)
        cardsTitulo.focus()
    })
})