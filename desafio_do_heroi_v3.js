class heroi {
	constructor(nome, idade, tipo){
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
         
    }

	atacar() {
    	let ataque;
        
        switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
     }
      
    console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    
    }
}

const guerreiro = new heroi("Boromir de Gondor", 40, "guerreiro");
const mago = new heroi("Gandalf O Cinzento", 10150, "mago");
const monge = new heroi("Aang", 112, "monge");
const ninja = new heroi("Jiraya", 30, "ninja");

guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();
