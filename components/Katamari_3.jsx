'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const Sketch = dynamic(() => import('react-p5'), {
    ssr: false,
})

let q
let collectedWords = []

let posX = 0
let posY = 0
let speed = 4

let rotX = 0
let rotY = 0
// let ball = {
//     pos: q?.createVector(0, 0),
//     speed: q.createVector(0, 0),
// }

const Katamari_3 = () => {
    useEffect(() => {
        const paragraphs = document.querySelectorAll('p')

        for (let paragraph of paragraphs) {
            // const paragraph = paragraphs[i]
            const words = paragraph.innerText.split(' ') // split it into words

            // clear the content of the <p>
            paragraph.innerHTML = ''

            // loop through each word and put the word into a span
            words.forEach((word) => {
                const wordElement = document.createElement('span')
                wordElement.innerText = word
                paragraph.appendChild(wordElement)
                paragraph.appendChild(document.createTextNode(' ')) // add a space between words
            })
        }
    }, [])

    const setup = (c, canvasParentRef) => {
        q = c
        c.createCanvas(c.windowWidth, c.windowHeight, c.WEBGL).parent(
            canvasParentRef
        )

        // c.cursor(c.CROSS)
        c.background(0, 0)
    }

    const draw = (c) => {
        c.clear()

        c.noStroke()
        c.fill(255, 200)
        // c.noFill()
        // c.ellipse(c.mouseX, c.mouseY, 50, 50)

        // c.stroke(255)
        // c.line(c.mouseX, 0, c.mouseX, c.height) // vertical
        // c.line(0, c.mouseY, c.width, c.mouseY) // horizontal

        // c.normalMaterial()
        if (q.keyIsDown) {
            let dx = 0
            let dy = 0

            if (q.keyIsDown(87)) {
                // w key
                dy -= speed
            }
            if (q.keyIsDown(83)) {
                // s key
                dy += speed
            }
            if (q.keyIsDown(65)) {
                // a key
                dx -= speed
            }
            if (q.keyIsDown(68)) {
                // d key
                dx += speed
            }

            posX += dx
            posY += dy

            let rotScale = -0.04
            rotY += dx * rotScale
            rotX += dy * rotScale

            removeElement()
        }
        //    c.text(`${c.key} ${c.adwsdkeyCode}`, 10, 40);

        drawBall()

        q.fill(255)
        q.ellipse(posX, posY, 50, 50)
    }

    function drawBall() {
        q.ambientLight(60, 60, 60)
        // c.pointLight(255, 255, 255, 0, 0, 100)

        q.push()
        // c.translate(c.width/2, c.height/2)
        q.translate(posX, posY)
        // q.rotateX(q.frameCount * 0.01)

        // c.fill(250, 0, 0)
        q.stroke(255)
        // c.ambientMaterial(250)

        q.rotateY(rotY)
        q.rotateX(rotX)
        q.sphere(50)
        // c.torus(80, 20, 64, 64)
        q.pop()
    }

    const removeElement = () => {
        const element = document.elementFromPoint(
            posX + q.width / 2,
            posY + q.height / 2
        )
        // console.log(element)
        // console.log(element.tagName)

        if (element?.tagName.toLowerCase() === 'span') {
            let word = element.innerText
            // console.log('got span')
            element.style.visibility = 'hidden'

            // console.log(word)
            if (word !== ' ') {
                collectedWords.push(word)
            }
        }

        // console.log(collectedWords)
    }

    const mouseClicked = (c, event) => {
        // const element = document.elementFromPoint(c.mouseX, c.mouseY)
        // // console.log(element)
        // if (element.tagName?.toLowerCase() === 'span') {
        // 	// console.log('got span')
        // 	element.style.visibility = 'hidden'
        // }
    }

    const mouseMoved = (c, event) => {
        removeElement()
    }

    function windowResized(c) {
        c.resizeCanvas(c.windowWidth, c.windowHeight)
    }

    return (
        <Sketch
            setup={setup}
            draw={draw}
            windowResized={windowResized}
            mouseClicked={mouseClicked}
            mouseMoved={mouseMoved}
        />
    )
}
export default Katamari_3
