const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle=>{
    toggle.addEventListener('click',()=>{
        //调用父节点，通过监听点击事件切换active
        toggle.parentNode.classList.toggle('active')
    })
})