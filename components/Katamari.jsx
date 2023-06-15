'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const Sketch = dynamic(() => import('react-p5'), {
    ssr: false,
})

let q
let collectedWords = []

const Katamari = () => {
    useEffect(() => {
        const paragraphs = document.querySelectorAll('p')

        for (let paragraph of paragraphs) {
            // const paragraph = paragraphs[i]
            const words = paragraph.innerText.split(' ') // split it into words

            // clear the content of the <p>
            paragraph.innerHTML = ''

            // loop through each word and put the word into a span
            words.forEach(word => {
                const wordElement = document.createElement('span')
                wordElement.innerText = word
                paragraph.appendChild(wordElement)
                paragraph.appendChild(document.createTextNode(' ')) // add a space between words
            })
        }
    }, [])

    const setup = (c, canvasParentRef) => {
        q = c
        c.createCanvas(c.windowWidth, c.windowHeight).parent(canvasParentRef)

		// c.cursor(c.CROSS)
        c.background(0, 0)
    }

    const draw = (c) => {
        c.clear()

        c.noStroke()
        c.fill(255, 200)
		// c.noFill()
        c.ellipse(c.mouseX, c.mouseY, 50, 50)

		// c.stroke(255)
		// c.line(c.mouseX, 0, c.mouseX, c.height) // vertical
		// c.line(0, c.mouseY, c.width, c.mouseY) // horizontal
    }

	const removeElement = () => {
		const element = document.elementFromPoint(q.mouseX, q.mouseY)
		// console.log(element)
		// console.log(element.tagName)

		if (element.tagName.toLowerCase() === 'span') {
			let word = element.innerText
			// console.log('got span')
			element.style.visibility = 'hidden'

			console.log(word)
			if (word !== ' ') {
				collectedWords.push(word)

			}
		}

		// console.log(collectedWords)
	}

    const mouseClicked = (c, event) => {
        const element = document.elementFromPoint(c.mouseX, c.mouseY)
		// console.log(element)

		if (element.tagName?.toLowerCase() === 'span') {
			// console.log('got span')
			element.style.visibility = 'hidden'
		}
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
export default Katamari
