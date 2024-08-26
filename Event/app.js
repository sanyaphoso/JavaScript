// function sayHello(){
//     alert("Hello World")
// }15

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

function display(value){
    document.getElementById("result").innerHTML = value
}

function celsius(fah){
    // let fah = prompt("Fahrenheit:")
    display(toCelsius(fah))
}
function fahrenheit(cel){
    // let cel = prompt("Celsius:")
    display(toFahrenheit(cel))
}
    
// toCelsius(fah)
// toFahrenheit(cel)


