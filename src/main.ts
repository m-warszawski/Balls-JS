import { Generator } from "./generator"
import { Deco } from "./deco"

//Elementy HTML inne niż plansza
var deco = new Deco();
var root: HTMLElement = document.getElementById("root");
root.appendChild(deco.napis());
root.appendChild(deco.poprz());

//Główna część programu
var generator = new Generator();


