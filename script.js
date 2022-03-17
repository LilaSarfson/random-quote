const quotes = [
    {
        quote:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
    },
    {
        quote:
            "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
    },
    {
        quote:
            "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
    },
    {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
    },
    {
        quote:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
    },
    {
        quote:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
    }
];
let vecesClic = 0; //el usuario ha hecho 0 veces click al inicio de la app.
//Función para que me calcule una posición al azar dentro de quotes
function getRandomQuote() {
    let randomElement = quotes[Math.floor(Math.random() * quotes.length)];
    return randomElement;
}
// 3. Cada vez que se capture un evento, considerar si hay que actualizar el estado de la aplicación; y si también hay que modificar la interfaz del usuario con nueva info


let buttonQuote = document.querySelector("button");
buttonQuote.addEventListener("click", function (e) {
    vecesClic = vecesClic + 1;
    console.log(vecesClic);
    let randomQuote = getRandomQuote();
    let motivationalParr = document.querySelector("#motivationalPar");
    motivationalParr.textContent = randomQuote.quote;
    let randomAuthor = document.querySelector("#author");
    randomAuthor.textContent = randomQuote.author;
})

