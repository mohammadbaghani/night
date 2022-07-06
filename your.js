let bulbImg = document.getElementById('lamp')
let btn = document.getElementById('btn')

let turnon = false

function turnOffOrOn() {
    // alert('Turn On/Off')

if(turnon){
    bulbImg.setAttribute('src','bulboff.gif')
    btn.innerHTML='روشن کن'
    turnon =false
}
else{
    bulbImg.setAttribute('src', 'bulbon.gif')
    btn.innerHTML='خاموش کن'
    turnon =true
}
}