let name = "Alexandre";
let xp = 10000;
let ranked = "";
let i = 0;

const Ferro = "Ferro";
const Bronze = "Bronze";
const Prata = "Prata";
const Ouro = "Ouro";
const Platina = "Platina";
const Ascendente = "Ascendente";
const Imortal = "Imortal";
const Radiante = "Radiante";


if (xp < 1000) {
    ranked = Ferro; 
} else if (xp >= 1001 && xp <= 2000) {
    ranked = Bronze;
} else if (xp >= 2001 && xp <= 5000) {
    ranked = Prata;
} else if (xp >= 5001 && xp <= 7000) {
    ranked = Ouro;
} else if (xp >= 7001 && xp <= 8000) {
    ranked = Platina;
} else if (xp >= 8001 && xp <= 9000) {
    ranked = Ascendente;
} else if (xp >= 9001 && xp <= 10000) {
    ranked = Imortal;
} else {
    ranked = Radiante; 
}

console.log(`O Herói de nome ${name} está no nível de ${ranked}`);
