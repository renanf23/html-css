let conteudo = document.getElementsByClassName("titens")[0]
let teste = document.getElementById('teste')
let janela = document.getElementsByClassName('iconc')[0]
//TODOS OS PRODUTOS
produtos= [
    pmaca= {nome: 'Maçã',preco: 3.19, tipo:'Kg', peso:'140g',item: 1, quantpeso: 0 },
    plaranja= {nome:'Laranja', preco: 4.99, tipo:'Kg', peso:'250g',item: 2}, 
    pbanana={nome:'Banana', preco: 3.25, tipo:'Kg', peso:'200g',item: 3},
    pmamao={nome:'Mamão', preco: 7.14, tipo:'Unidade', peso:'650g',item: 4},
    pmanga={nome:'Manga', preco: 3.36, tipo:'Unidade', peso:'480g',item: 5},
    pabacate={nome:'Abacate', preco: 9.49, tipo:'Unidade', peso:'950g',item: 6},
    pabacaxi={nome:'Abacaxi', preco: 9.99, tipo:'Unidade', peso:'2Kg',item: 7},
    pmaracuja={nome:'Maracujá', preco: 4.99, tipo:'Kg', peso:'400g',item: 8},
    plimao={nome:'Limão', preco: 1.50, tipo:'Kg', peso:'100g',item: 9},
    ppera={nome:'Pera', preco: 7.22, tipo:'kg', peso:'200g',item: 10},
    pmelancia={nome:'Melancia', preco: 1.50, tipo:'Kg', peso:'5Kg',item: 11},
    pkiwi={nome:'Kiwi', preco: 2.70, tipo:'Unidade', peso:'135g',item: 12}
]

//ENTRADA DOS ITENS
let maca = document.getElementsByClassName('pmaca')[0]  

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
    <input type="number" inputmode="numeric" class="number" id="quantidade${produtos[pos].item}" placeholder="Kg">
    <input type="button" class="button" " value="Adicionar"  onclick=adicionar('${produtos[pos].item}')>`
    conteudo.appendChild(item)
}
let carrinhov = []

function adicionar(n){
    let quantidade = document.getElementById(`quantidade${n}`)
    switch (Number(n)){
        case 1:
            let maca = {nome: 'Maça', quantpeso: quantidade.value, valor: quantidade.value*3.19}
            carrinhov.push(maca)
            break
        case 2:
            let laranja = {nome: 'Laranja', quantpeso: quantidade.value, valor: quantidade.value*4.99}
            carrinhov.push(laranja)
            break
        case 3:
            let banana = {nome: 'Banana', quantpeso: quantidade.value, valor: quantidade.value*3.25}
            carrinhov.push(banana)
            break
        case 4:
            let mamao = {nome: 'Mamão', quantpeso: quantidade.value, valor: quantidade.value*7.14}
            carrinhov.push(mamao)
            break
        case 5:
            let manga = {nome: 'Manga', quantpeso: quantidade.value, valor: quantidade.value*3.36}
            carrinhov.push(manga)
            break
        case 6:
            let abacate = {nome: 'Abacate', quantpeso: quantidade.value, valor: quantidade.value*9.49}
            carrinhov.push(abacate)
            break
        case 7:
            let abacaxi = {nome: 'Abacaxi', quantpeso: quantidade.value, valor: quantidade.value*9.99}
            carrinhov.push(abacaxi)
            break      
        case 8:
            let maracuja = {nome: 'Maracuja', quantpeso: quantidade.value, valor: quantidade.value*4.99}
            carrinhov.push(maracuja)
            break
        case 9:
            let limao = {nome: 'Limão', quantpeso: quantidade.value, valor: quantidade.value*1.50}
            carrinhov.push(limao)
            break
        case 10:
            let pera = {nome: 'Pera', quantpeso: quantidade.value, valor: quantidade.value*7.22}
            carrinhov.push(pera)
            break
        case 11:
            let melancia = {nome: 'Melancia', quantpeso: quantidade.value, valor: quantidade.value*1.50}
            carrinhov.push(melancia)
            break
        case 12:
            let kiwi = {nome: 'Kiwi', quantpeso: quantidade.value, valor: quantidade.value*2.70}
            carrinhov.push(kiwi)
            break
        
    }
    quantidade.value=''
    
}
function comprar() {
    if(carrinhov.length ==0){
        janela.className='carrinho'
        janela.innerHTML= `<div class="tituloc">
        <h2>Meu Carrinho</h2>
    </div>
    <p>Vazio</p> <i class="fa-solid fa-trash"></i><br>
    <div class="total">
        <h3>Total</h3>
        <p>R$00,00</p>
        <input type="button" value="COMPRAR">
    </div>`
    }else{
        janela.className='carrinho'
        janela.innerHTML= `<div class="tituloc">
        <h2>Meu Carrinho</h2>
        </div>`
        for (item in carrinhov){
            janela.innerHTML += `<p><span>${carrinhov[item].nome}</span> ${carrinhov[item].quantpeso}Kg R$${carrinhov[item].valor}</p> <i class="fa-solid fa-trash"></i><br>`
        }
        janela.innerHTML += ` 
        <div class="total">
        <h3>Total</h3>
        <p>R$00,00</p>
        <input type="button" value="COMPRAR">
        </div>`
    }


}

function sair(){
    janela.className='iconc'
    janela.innerHTML=`<p><i class="fa-solid fa-cart-shopping"></i></p>`
}