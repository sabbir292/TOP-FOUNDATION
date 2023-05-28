// UI------------------

const container = document.querySelector('.container')







const redP = document.createElement('p')
redP.textContent = `Hey I'm red!`
redP.style.color = 'red'

container.appendChild(redP)

const h3 = document.createElement('h3')
h3.style.color = 'blue'
h3.textContent = `I'm a blue h3!`
container.appendChild(h3)

const div = document.createElement('div')
div.setAttribute('class', 'div')
div.setAttribute('style', 'border: 1px solid black; background: pink;')

const h1 = document.createElement('h1')
h1.textContent = `I'm in a div`
div.appendChild(h1)

const p = document.createElement('p')
p.textContent = `Me TOO!`
div.appendChild(p)

container.appendChild(div)









