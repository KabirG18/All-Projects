const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const body = document.getElementById('body');

const random1 = Math.floor(Math.random() * 60) + 10;
const random2 = Math.floor(Math.random() * 60) + 10;
const random3 = Math.floor(Math.random() * 60) + 10;


sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        
        stopSongs()

        document.getElementById(sound).play()
    })


    document.getElementById('buttons').appendChild(btn)

})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        
        song.pause()
        song.currentTime = 0;
    })
}
// body.style.backgroundColor = `rgba(${random1},${random2},${random3})`;

/*
const buttons =  document.getElementById('buttons');

buttons.addEventListener('click',function () {      
        body.style.backgroundColor = `rgba(${random1},${random2},${random3})`;
})



*/
function function1 () {
    body.style.backgroundColor = `rgba(${random1},${random2},${random3})`;
}

