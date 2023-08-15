const _quote = document.querySelector("#quote");
const _author = document.querySelector("#author");

window.onload = () => {
    getData();
}

async function getData() {
    const response = await fetch("./quotes.json");
    const data = await response.json();
    showQuote(data);
}

function showQuote(data) {
    data = data[(Math.floor(randomIndex(1, 109))) - 1];
    _quote.innerHTML += data.quote;
    _author.innerHTML += data.author;
}

function randomIndex(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

