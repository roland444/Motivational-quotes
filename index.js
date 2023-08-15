const _quote = document.querySelector("#quote");
const _author = document.querySelector("#author");

window.onload = () => {
    getData();
}

async function getData() {
    const response = await fetch("./quotes.json");
    const data = await response.json();
    console.log(data[0].quote);
}

function loadQuote(data) {

}