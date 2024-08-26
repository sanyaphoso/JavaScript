let round = prompt("เล่นกี่รอบ:")
var score = 0
for (var i = 0; i < round; i++){
    var answer = prompt("หัว หรือ ก้อย:")
    var random_ans = ""
    if ( Math.floor(Math.random() *10) <= 4){
        //หัว
        random_ans = "หัว"
        if (answer == random_ans){
            alert("รอบที่ " + (i+1) + " คุณชนะ")
            score += 1
        }
        else{
            alert("รอบที่ " + (i+1) + " คุณแพ้")
        }

    }
    else{
        //ก้อย
        random_ans = "ก้อย"
        if (answer == random_ans){
            alert("รอบที่ " + (i+1) + " คุณชนะ")
            score += 1
        }
        else{
            alert("รอบที่ " + (i+1) + " คุณแพ้")
        }
    }
    document.getElementById("game-list").innerHTML += answer + " : " + random_ans + "<br>"

}
document.getElementById("result").innerHTML = "คุณได้ " + score + " คะแนน"
