let qre = prompt("จำนวนสินค้า:")
let sum = 0
for (var i = 0; i < qre; i++){
    let item_price = prompt("สินค้าชิ้นที่" + (i+1))
    sum = sum + parseInt(item_price)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่"+ (i+1) + ': ' + item_price + ' บาท' + '<br>'
}

document.getElementById("result").innerHTML = "ราคารวมเท่ากับ: " + sum + " บาท"
