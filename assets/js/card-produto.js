import criarModal from "./modalProduto.js"

export const cardsProduto = document.querySelector('.cards-produto__container')
export const cardsTitulo = document.getElementById('cardsProduto-titulo')

export let produtos = []
let categorias = ["camisetas", "calcas", "calcados", "casacos", "oculos", "bolsas"]

for (let i = 0; i < categorias.length; i++) {
    const produtoUrl = `http://localhost:3000/${categorias[i]}`
    produtos.push(produtoUrl)
}

produtos.forEach(produto => fetchProduto(produto))

export async function fetchProduto(produto) {
    try {
        var getProduto = await fetch(produto)
        var produtoConvertido = getProduto.json()

        pegarProduto(produtoConvertido)
    } catch (erro) {
        console.log(erro)
    }
}

async function pegarProduto(produtoConvertido) {
    const produto = await produtoConvertido
    
    for (let i = 0; i < produto.length; i++) {
        const precoReal = produto[i].preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

        const estruturaCard = `
        <li class="card-produto" tabindex="0">
            <img class="card-produto__imagem" src="${produto[i].imagem}">
            <div class="card-produto__descricao" data-cores="${produto[i].cores}" data-tamanhos="${produto[i].tamanhos}">
                <h3 class="descricao__titulo">${produto[i].titulo}</h3>
                <p class="descricao__texto">${produto[i].texto}</p>
                <p class="descricao__preco">${precoReal}</p>
                <a class="descricao__link btnBase" tabindex="0">Ver mais<span class="escondeVisualmente"> sobre ${produto[i].titulo}</span></a>
            </div>
        </li>`
        cardsProduto.innerHTML += estruturaCard
    }
    criarModal()
}