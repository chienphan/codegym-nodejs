const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')
const width = 1200
const height = 630


const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')


context.fillStyle = '#000'
context.fillRect(0, 0, width, height)


context.font = 'bold 70pt Menlo'
context.textAlign = 'center'
context.textBaseline = 'top'
context.fillStyle = '#3574d4'


const text = 'Hello, NodeJs!'


const textWidth = context.measureText(text).width
context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
context.fillStyle = '#fff'
context.fillText(text, 600, 170)


context.fillStyle = '#fff'
context.font = 'bold 30pt Menlo'
context.fillText('codegym.vn', 600, 530)


loadImage('./codegym.jpg').then(image => {
context.drawImage(image, 340, 515, 140, 70)
const buffer = canvas.toBuffer('image/jpeg')
fs.writeFileSync('./test.jpg', buffer)
})