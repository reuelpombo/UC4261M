import { Guerreiro } from "./Guerreiro";
import { Mago } from "./Mago";


const guerreiro:Guerreiro = new Guerreiro("Aragorn");
const mago:Mago = new Mago("Gandalf");

guerreiro.atacar();
mago.atacar();


luta(guerreiro, mago);
mago.curar(30);