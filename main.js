let dollarValue = document.querySelector('.price');
fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=86f8545f5b9b42039c6df7fffc9f8d82").then((result) => {
    let myData = result.json()
    return myData
}).then((data) => {
    let sypVsDollar = Math.round(data.rates["SYP"])
    dollarValue.innerHTML = sypVsDollar
})
let convertBtn = document.querySelector(".convert")
convertBtn.addEventListener("click" , () => {
    let usdValue = document.querySelector(".usd")
    let sypValue = document.querySelector(".syp")
    sypValue.value = dollarValue.innerHTML * usdValue.value
})

