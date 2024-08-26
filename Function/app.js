// function sayHello(){
//     alert("Hello World")
// }
// sayHello()



// function sayHello(){
//     return "Hello World"
// }
// alert(sayHello())

// function sayHello(userName, userLastname){
//     return "Hello " + userName + " " + userLastname
// }

// let userInput = prompt("Enter your name:")
// alert(sayHello(userInput, "Phoso"))

function toCelsius(fahrenheit){
    // let fahrenheit = prompt("Fahrenheit:")
    let value = (fahrenheit - 32)* 5 / 9
    return value.toFixed(2) + "  ํC";
    // document.getElementById("cel").innerHTML = value.toFixed(2) + "  ํC"
}


function toFahrenheit(celsius){
    // let celsius = prompt("Celsius:")
    let value = (celsius * 9/5) + 32
    return value.toFixed(2) + "  ํF";
    // document.getElementById("fah").innerHTML = value.toFixed(2) + "  ํF"
}

function display(elementId, value){
    document.getElementById(elementId).innerHTML = value
}

let fah = prompt("Fahrenheit:")
let cel = prompt("Celsius:")

// toCelsius(fah)
// toFahrenheit(cel)

display("cel", toCelsius(fah))
display("fah", toFahrenheit(cel))