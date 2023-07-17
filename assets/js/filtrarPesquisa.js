import { produtos, cardsProduto, cardsTitulo } from "./card-produto.js";
import criarModal from "./modalProduto.js"

let campoPesquisa = document.querySelector('.pesquisa__navegacao');
const botaoPesquisa = document.querySelector('.pesquisa__botao');
let pesquisaConvertida = "";
    
botaoPesquisa.addEventListener('click', () => {
    if (campoPesquisa.value != "") {
        const pesquisa = campoPesquisa.value;
        campoPesquisa.value = ""

        function textlize() {
            let words = pesquisa.toLowerCase().split(" ")
            
            for (let i = 0; i < words.length; i++) {
                let w = words[i]
                words[i] = w[0].toUpperCase() + w.slice(1);
            }
            return words.join(" ")
        }
        pesquisaConvertida = textlize()
    }
    cardsProduto.innerHTML = ""
    
    produtos.forEach(produto => fetchPesquisa(produto))
    pesquisaNaoEncontrada()
})

async function fetchPesquisa(produto) {
    try {
        var getProduto = await fetch(produto)
        var produtoConvertido = getProduto.json()

        filtrarProduto(produtoConvertido)
    } catch (erro) {
        console.log(erro)
    }
}

async function filtrarProduto(produtoConvertido) {
    const produto = await produtoConvertido
    
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].titulo == pesquisaConvertida) {
            const precoReal = produto[i].preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

            const estruturaCard = `
            <div class="card-produto">
                <img class="card-produto__imagem" src="${produto[i].imagem}">
                <div class="card-produto__descricao" data-cores="${produto[i].cores}" data-tamanhos="${produto[i].tamanhos}">
                    <h3 class="descricao__titulo">${produto[i].titulo}</h3>
                    <p class="descricao__texto">${produto[i].texto}</p>
                    <p class="descricao__preco">${precoReal}</p>
                    <a class="descricao__link btnBase" tabindex="0">Ver mais<span class="escondeVisualmente"> sobre ${produto[i].titulo}</span></a>
                </div>
            </div>`
            cardsTitulo.innerHTML = `Pesquisa: ${pesquisaConvertida} <span class="escondeVisualmente"> Lista de produtos.</span>`
            cardsProduto.innerHTML = estruturaCard

            criarModal()
        }
    }
}

function pesquisaNaoEncontrada() {
    if(cardsProduto.innerHTML == "") {
        cardsTitulo.innerHTML = `<a href="#campoPesquisa" class="linkEscondido">Pesquisa: ${pesquisaConvertida} (Produto não encontrado) <span class="escondeVisualmente">voltar para o campo de pesquisa</span></a>`
        cardsProduto.innerHTML = `
        <p class="emoji-erro"> \\(o_o)/ </p>
        `
    }
}