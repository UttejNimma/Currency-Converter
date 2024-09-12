
const apiUrl="https://restcountries.com/v3.1/all";
fetch(apiUrl).then(response=>response.json())
.then(data=>{
    const fromSelectElement = document.getElementById('fromCurrencySelect');
    const toSelectElement = document.getElementById('toCurrencySelect');

    function populateSelect(selectElement){
        data.forEach(country=>{
            if(country.currencies){
                Object.entries(country.currencies).forEach(([code,currency])=>{
                    const option = document.createElement('option');
                    option.value=code;
                    option.textContent=` ${currency.name} : ${code}`;
                    selectElement.appendChild(option);
                });
            }
        });
    }

    populateSelect(fromSelectElement);
    populateSelect(toSelectElement);
}).catch(error=>console.error('Error fetching contry currenct:',error));


const from = document.getElementById("fromCurrencySelect");
const to = document.getElementById("toCurrencySelect");
const convert = document.getElementById("convert");
const amount = document.getElementById("amount");
const result = document.getElementById("result");

convert.addEventListener("click",function(){
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = amount.value;
    let url=`https://v6.exchangerate-api.com/v6/{add your key}/latest/${fromCurrency}`;
    fetch(url).then(response=>response.json())
    .then(data=>{
        
        let rate = data.conversion_rates[toCurrency];
        let total = rate*amt;
        result.innerHTML=`${amt} ${fromCurrency} = ${total.toFixed(2)} ${toCurrency}`;
    });
});

// Initialize Select2 on your select elements
$(document).ready(function() {
    $('.currency-select').select2({
        placeholder: "Select country/currency from below",
        allowClear: true
    });
});
