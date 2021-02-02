console.log('Add validation!');

let formIsValid

const form = document.querySelector("#parking-form")
window.addEventListener('submit', event => {
    event.preventDefault()
} )

form.addEventListener('click', event => { 
    //event.preventDefault() 
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
        //console.log(validateCardNumber(cardnumber.value))
    } else {
        cardnumber.setCustomValidity("");
        console.log(validateCardNumber(cardnumber.value))
    }
    showFullPrice()
}

function totalCost() {
    //let price = 5
    let totaldays = document.querySelector("#days").value
    let fullprice = datething()
    if (totaldays >= 1) {
    return "Your total cost is" + ' ' + "$" + fullprice}
}

function datething() {
    let inputdate = document.querySelector("#start-date").value
    let totaldays = parseInt(document.querySelector("#days").value, 10)
    console.log(totaldays)
    let dateobject = new Date(inputdate)
    let day = new Date(inputdate)
    let days = []
    for (let index = 1; index <= totaldays; index++){
        day = new Date (day.setDate(day.getDate()+1))
        console.log(day)
        days.push(day.getDay())
    }
    console.log(days)
    return days
        .map(day => (day > 0 && day < 6 ? 5:7))
        .reduce ((fullprice,cost) => {
            return (fullprice += cost)
        }, 0)
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
