let conteudo = document.getElementsByClassName("titens")[0]
let janela = document.getElementById('carrinho')
//TODOS OS PRODUTOS
produtos= [
    maca= {nome: 'Maçã',preco: 3.19, tipo:'Kg', peso:'140g'},
    laranja= {nome:'Laranja', preco: 4.99, tipo:'Kg', peso:'250g'}, 
    banana={nome:'Banana', preco: 3.25, tipo:'Kg', peso:'200g'},
    mamao={nome:'Mamão', preco: 7.14, tipo:'Unidade', peso:'650g'},
    manga={nome:'Manga', preco: 3.36, tipo:'Unidade', peso:'480g'},
    abacate={nome:'Abacate', preco: 9.49, tipo:'Unidade', peso:'950g'},
    abacaxi={nome:'Abacaxi', preco: 9.99, tipo:'Unidade', peso:'2Kg'},
    maracuja={nome:'Maracujá', preco: 4.99, tipo:'Kg', peso:'400g'},
    limao={nome:'Limão', preco: 1.50, tipo:'Kg', peso:'100g'},
    pera={nome:'Pera', preco: 7.22, tipo:'kg', peso:'200g'},
    melancia={nome:'Melancia', preco: 1.50, tipo:'Kg', peso:'5Kg'},
    kiwi={nome:'Kiwi', preco: 2.70, tipo:'Unidade', peso:'135g'}
]

conteudo.innerHTML=''
for (let pos in produtos){
    let item = document.createElement('div')
    item.className = 'itens'
    item.innerHTML =` <div class="frutas">
    <div class="descricao">
        <img src="Imagens/${produtos[pos].nome}.webp" alt="">
        <a href="#">${produtos[pos].nome}</a>
        <p>(Unidade com aprox. ${produtos[pos].peso})
        </p>
    </div>
    <div class="preco">
        <p><strong>R$${produtos[pos].preco}<span>/${produtos[pos].tipo}</span></strong></p>
    </div>
    <input type="button" value="Adicionar">`
    conteudo.appendChild(item)
}

function comprar() {
    janela.innerHTML= '<p>foi</p>'
}

function sair(){
    janela.innerHTML= '<p><i class="fa-solid fa-cart-shopping"></i></p>'
}