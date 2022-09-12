//Definindo as dimenções do jogo

var altura = 0
var largura = 0
var vidas = 1
var tempo = 100

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	//1500
	criaMoscaTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMoscaTempo = 1000
} else if(nivel === 'negao') {
	//500
	criaMoscaTempo = 500
}

function ajustaTamanhoDoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoDoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

//Criando Posições randômicas

function posicaoRandom() {

	//Remover mosca anterior (Caso exista)
	if (document.getElementById('mosca')) {
	document.getElementById('mosca').remove()
		//Pontos de Vida
		if (vidas > 3) {
			
			window.location.href = 'fimdejogo.html'

		} else {
		document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"

		vidas++
		}
	}


	var posicaoX = Math.floor(Math.random() * largura) - 150
	var posicaoY = Math.floor(Math.random() * altura) - 150

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log (posicaoX, posicaoY)


//Elemento HTML

	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosca)
}

//Tamanhos Randômicos

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'
		case 2:
			return 'mosca3'
	}

}

//Lado A e Lado B

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'LadoA'
		case 1:
			return 'LadoB'
	}
}
