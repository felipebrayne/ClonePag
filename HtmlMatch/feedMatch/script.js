let curtida = document.querySelector('.curtirFt')
let estadoImagem = 1
let descurtir = document.querySelector('.ftCurtida')
let opçoes = document.getElementById('Opcoes')
let opçoesOcultas = document.getElementById('Opcoes-ocultas')

let opçoes2 = document.getElementById('opçoes2')
let opçoesOcultas2 = document.getElementById('Opcoes-oculta-2')

let opçoes3 = document.getElementById('opçoes3')
let opçoesOcultas3 = document.getElementById('Opcoes-oculta-3')



curtida.addEventListener("click", function(){
    if(estadoImagem === 1  ){
        curtida.src = 'imgs/curtida.svg'
        estadoImagem = 2
       } else {
        curtida.src = 'imgs/curtir.svg'
        estadoImagem = 1
       }
})

descurtir.addEventListener("click", function(){
    if(estadoImagem === 1  ){
        descurtir.src = 'imgs/curtir.svg'
        estadoImagem = 2
    } else {
        descurtir.src = 'imgs/curtida.svg'
        estadoImagem = 1
       }
})


opçoes.addEventListener("click", function(){
    if(opçoesOcultas.style.display ==='none'){
        opçoesOcultas.style.display = ('block')
    } else {
        opçoesOcultas.style.display = 'none'
    }
})


opçoes2.addEventListener("click", function(){
    if(opçoesOcultas2.style.display ==='none'){
        opçoesOcultas2.style.display = ('block')
    } else {
        opçoesOcultas2.style.display = 'none'
    }
})

opçoes3.addEventListener("click", function(){
    if(opçoesOcultas3.style.display ==='none'){
        opçoesOcultas3.style.display = ('block')
    } else {
        opçoesOcultas3.style.display = 'none'
    }
})



