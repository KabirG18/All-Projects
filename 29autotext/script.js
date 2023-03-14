const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'CALL OF DUTY '
let idx = 1
let speed = 300 / speedEl.value
document.getElementById("pic").style.filter = "blur(0px)";

writeText()

function writeText() {
    const somethin = textEl.innerText = text.slice(0, idx)


    idx++



    setTimeout(writeText, speed)

    console.log(somethin);
    if (somethin === 'CALL OF DUTY') {
      document.getElementById("pic").style.transition = "all 2s";
      document.getElementById("pic").style.filter = "blur(7px)";
    }

}
