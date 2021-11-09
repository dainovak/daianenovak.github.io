function MostrarCampoPesquisar(){
let campo = document.querySelector("#campo")
if(campo.style.display == "inline"){
    campo.style.display == "none"
}else{
    campo.style.display = "inline"

 }

}


projeto1 = {
    titulo:'calculadora',
    descrição:'Projeto desenvolvido utilizando javascript, html e css de uma calculadora de média simples.',
    foto: 'calculadora.png'
}

// //objetos + array
projeto2 = {
    titulo:'conversor',
    descrição:'descrição do conversor.',
    foto: 'conversor.png'
}

let projetos = [projeto1 , projeto2 ]

let projetoAtual = 0

function ProximoProjeto(){
    if(projetoAtual < 1){
        projetoAtual++
     }else{
     projetoAtual = 0
     }

     titulo = document.querySelector(".titulo-projeto")
     titulo.innerHTML = projetos[projetoAtual].titulo

     titulo = document.querySelector(".texto-corpo")
     titulo.innerHTML = projetos[projetoAtual].descrição

     titulo = document.querySelector(".foto-perfil")
     imagem.src = "imagens/" + projetos[projetoAtual].foto

}


