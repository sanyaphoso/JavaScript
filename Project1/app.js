// for (let i = 0; i < 3; i++){ 
//     console.log("Hello World")
// }
// // alert("Hello Sanya")
// var firstName = "Sanya"
// var lastName = " Phoso"
// console.log(firstName + lastName)
// // alert(firstName + lastName)
// console.log(typeof 10)

/***************** var vs let *****************/
// var x = 20
// {
//     var x = 100
//     let y = 15 // let จะใช้งานภายใน ไม่สามารถเรียกข้างนอกได้
// }
// console.log(x)

/***************** Prompt *****************/
// let name = prompt("กรอกชื่อ: ")
// console.log("Hello "+ name)

/***************** Random Number *****************/
let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ: ")
console.log(lotto_number)
document.getElementById("input_lotto").innerHTML = lotto_number
let rad = Math.floor(Math.random() * 1000)
console.log(rad)
document.getElementById("result").innerHTML = rad

t = "คุณถูกรางวัล"
f = "คุณไม่ถูกรางวัล"
if (lotto_number == rad){
    console.log("คุณถูกรางวัล")
    document.getElementById("test").innerHTML = t
}
else{
    console.log("คุณไม่ถูกรางวัล")
    document.getElementById("test").innerHTML = f
}
console.log(9.9 >= 9.99)