class Carro{
nome 
potencia
velocidadeMaxima
aceleracao

constructor(nome,potencia,velocidadeMaxima,aceleracao){
this.nome = nome
this.potencia =potencia
this.velocidadeMaxima = velocidadeMaxima
this.aceleracao = aceleracao
}
Calculartempomedio(distancia){
let resultado = distancia / (this.velocidadeMaxima/this.aceleracao)
return resultado
}
}

class Corrida {
nome 
tipo
distancia
participantes
vencedor
constructor(nome,tipo,distancia){
this.nome = nome
this.tipo = tipo
this. distancia = distancia
this.participantes = []
this.vencedor = ""
}
definirvencedor(){
let Tempomaisrapido = this.participantes[0].Calculartempomedio(this.distancia)
let vencedor = this.participantes[0]



for(let index = 1; index < this.participantes.length; index ++){
let tempo = this.participantes[index].Calculartempomedio(this.distancia)
if(tempo < Tempomaisrapido){
    Tempomaisrapido = tempo 
    vencedor = this.participantes[index]
}

}

return this.vencedor = vencedor
}
mostrarvencedor(){
    alert("o vencedor é " + this.vencedor.nome)
}
}

let localcorrida = new Corrida ("MONACO GRANDPRIX", "FORMULA 1", 10000)

localcorrida.participantes[0] = new Carro ("mclaren",850,390,3)

localcorrida.participantes[1] = new Carro("fusca",100, 80, 12)

localcorrida.participantes[2]= new Carro ("mercedes",1200,450,0.5)


localcorrida.definirvencedor()
localcorrida.mostrarvencedor()

