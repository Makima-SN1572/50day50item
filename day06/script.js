const boxes = document.querySelectorAll('.box')


/* 加一个窗口上的滚动事件的监听器 */
window.addEventListener('scroll',checkBoxes)
checkBoxes()
function checkBoxes(){
    const triggerBottom= window.innerHeight / 5 * 4
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top

        /* 查看合资的顶部是否小于触发器底部 */
        if(boxTop<triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}