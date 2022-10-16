const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')//把每个字母分开
        //transition-delay 属性规定过渡效果何时开始。以秒或毫秒计
        .map((letter,idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)//映射给每个字母创建span
        .join('')//转成字符串
});