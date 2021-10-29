const Btn = document.querySelectorAll('.rippleBtn')

Btn.forEach(curr => {
    curr.addEventListener("click", function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft


        console.log(buttonTop);
        console.log(buttonLeft);
        const xInside = x - buttonLeft
        const yInside = y - buttonTop


        const circle = document.createElement('span')
        circle.classList.add('circle')

        circle.style.left = yInside + 'px'
        circle.style.top = xInside + 'px'
        this.appendChild(circle)

        setTimeout(() => { circle.remove() }, 500)
    })
})