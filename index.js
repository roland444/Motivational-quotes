const _quote = document.querySelector("#quote");
const _author = document.querySelector("#author");
const api_url = "";


document.addEventListener("DOMContentLoaded", function() {
    loadData()
})

async function loadData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data[0]);
}
