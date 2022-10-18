/* 拿到div包装文本 */
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click',generateJoke)
generateJoke()

//异步
async function generateJoke() {
    const config = {
        headers: {
            //接收对象形式的数据
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke

}

//fetch，Sthen()
/* function generateJoke() {
    const config = {
        headers: {
            //接收对象形式的数据
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then(data => jokeEl.innerHTML=data.joke)
} */