console.log('Add validation!');

let formIsValid

const form = document.querySelector("#parking-form")

window.addEventListener('submit', event => { 
event.preventDefault()
})

form.addEventListener('click', validate, totalCost)

function validate(event) {
    event.preventDefault();
    formIsValid = true
    // confirmValidForm()

    showFullPrice()
}

// function confirmValidForm() {
//     if (true) {
        
//     }
// }


function totalCost() {
    let price = 5
    let totaldays = document.querySelector("#days").value
    let fullprice = totaldays * price; 
    console.log(totaldays)
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

// const fullPriceEl = document.createElement('h2') {
//     const fullPricetxt = document.createTextNode('This form is valid!')
//     validMsgEl.appendChild(validMsgText)
//     document.querySelector('main').appendChild(validMsgEl)
//   }