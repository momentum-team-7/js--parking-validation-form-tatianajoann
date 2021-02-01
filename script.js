console.log('Add validation!');

let formIsValid

const form = document.querySelector("#parking-form")


form.addEventListener('submit', event => { 
    event.preventDefault() 
    validate(event)
    totalCost()
})

function validate(event) {
    removeValidMessage()
    formIsValid = true
    let cardnumber = document.querySelector("#credit-card")
    if (!validateCardNumber(cardnumber.value)) {
        formIsValid = false;
        cardnumber.setCustomValidity("Credit card number is invalid");
        console.log(validateCardNumber(cardnumber.value))
    } else {
        cardnumber.setCustomValidity("");
        console.log(validateCardNumber(cardnumber.value))
    }
    showFullPrice()
}



function totalCost() {
    let price = 5
    let totaldays = document.querySelector("#days").value
    let fullprice = totaldays * price; 
    let inputdate = document.querySelector("#start-date").value
    console.log(inputdate)
    let dateobject = new Date(inputdate)
    console.log(dateobject)
    let nextday = new Date(inputdate)
    const textnextday = nextday.getDate()
    nextday.setDate(textnextday + 1)
    console.log(nextday)
    if (totaldays >= 1) {
    return "Your total cost is" + ' ' + "$" + fullprice}
}

function showFullPrice () {
    if (formIsValid && form.checkValidity()) {
        const fullPriceEl = document.createElement("h2")
        fullPriceEl.id = 'full-price'
        const fullPriceText = document.createTextNode(totalCost())
        fullPriceEl.appendChild(fullPriceText)
        document.getElementById("total").appendChild(fullPriceEl)
    }
}

function removeValidMessage () {
    const fullPrice = document.querySelector("#full-price")
    if (fullPrice) {
        fullPrice.remove()
    }
}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
