import { Pokemon } from "./Pokemon"
import { Poder } from "./Poder"

// Criando dois poderes
const poder1 = new Poder("Choque do Trovão", 30)
const poder2 = new Poder("Lança-Chamas", 25)

// Criando dois Pokémons
const pikachu = new Pokemon("Pikachu", 100, 30, poder1)
const charmander = new Pokemon("Charmander", 100, 25, poder2)

// Pequena batalha
pikachu.falar()
charmander.falar()

pikachu.atacar(charmander)
charmander.atacar(pikachu)

pikachu.atacarComPoder(charmander)
charmander.atacarComPoder(pikachu)

console.log(pikachu)
console.log(charmander)