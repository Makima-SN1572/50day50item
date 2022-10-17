const sounds = ['ding', 'doingdong', 'game', 'iphone', 'rock', 'wind']

sounds.forEach(sound => {
    /* 设置一个变量,给变量一个按钮 */
    const btn = document.createElement('button')
    /* 给按钮添加class btn */
    btn.classList.add('btn')
    /* 让按钮的文字写上sound数组名字 */
    btn.innerText = sound

    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    /* 引用button,给加上上方整合好的btn */
    document.getElementById('buttons').
    appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime =0
    })
}