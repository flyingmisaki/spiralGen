const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth * 2
canvas.height = window.innerHeight * 2


let number = 0
let scale = 5
let size = 10
hue = Math.random() * 360

function drawFlower() {
    let angle = number * 1
    let radius = scale * Math.sqrt(number)
    let positionX = radius * Math.sin(angle) + canvas.width/2
    let positionY = radius * Math.cos(angle) + canvas.height/2
    
    ctx.fillStyle = 'hsl('+ hue +', 100%, 50%)'
    ctx.strokeStyle = 'hsl('+ hue +', 100%, 50%)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(positionX, positionY, size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    number ++
    hue ++
}

function animate() {
    drawFlower();
    requestAnimationFrame(animate);
}

animate()