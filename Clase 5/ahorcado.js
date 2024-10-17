const figuras = [
    `
     +---+
     |   |
     O   |
         |
         |
         |
    =========`,
    `
     +---+
     |   |
     O   |
     |   |
         |
         |
    =========`,
    `
     +---+
     |   |
     O   |
    /|   |
         |
         |
    =========`,
    `
     +---+
     |   |
     O   |
    /|\\  |
         |
         |
    =========`,
    `
     +---+
     |   |
     O   |
    /|\\  |
    /    |
         |
    =========`,
    `
     +---+
     |   |
     O   |
    /|\\  |
    / \\  |
         |
    =========`,
];

const lenguajes = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "Rust",
    "TypeScript",
    "Go",
    "Kotlin",
    "Swift",
];

let lenguaje = lenguajes[Math.floor(Math.random() * lenguajes.length)];
let lowercasedLaguage = lenguaje.toLowerCase();
let adivinadas = Array(lenguaje.length).fill("_");

let intentos = 5;

console.log("Adivina el lenguaje de programación");
do {
    console.log(figuras[intentos]);
    console.log("Intentos: ", intentos);
    console.log(adivinadas.join(" "));

    let letra = prompt("Digita una letra").charAt(0).toLowerCase();

    if (lowercasedLaguage.includes(letra)) {
        for (let i = 0; i < lowercasedLaguage.length; i++) {
            if (lowercasedLaguage[i] == letra) {
                adivinadas[i] = lenguaje[i];
            }
        }
    } else {
        intentos--;
    }

    if (adivinadas.join("") == lenguaje) {
        console.log("Felicidades");
        break;
    } else if (intentos === 0) {
        console.log(figuras[0]);
        console.log("Lo siento, el lenguaje era " + lenguaje);
        break;
    }
} while (true);
