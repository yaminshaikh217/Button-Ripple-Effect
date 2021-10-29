const Btn = document.querySelectorAll('.rippleBtn')

Btn.forEach(curr => {
    curr.addEventListener("click", function (e) {
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop





        const circle = document.createElement('span')
        circle.classList.add('circle')

        circle.style.left = x + 'px'
        circle.style.top = y + 'px'
        this.appendChild(circle)

        setTimeout(() => { circle.remove() }, 500)
    })
})