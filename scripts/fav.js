let text = document.querySelector('input[type="text"]')
let btn = document.querySelector('input[type="button"]')
let form = document.querySelector('form')

btn.addEventListener('click', getHero)

function getHero() {
    let heroName = form.querySelector('input[type="text"]').value.toLowerCase()
    let casual = document.createElement('form')
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let input = document.createElement('input')
    casual.innerHTML = form.innerHTML

    function favHero(heroName, src) {
        form.innerHTML = ''
        p.innerHTML = heroName.charAt(0).toUpperCase() + heroName.slice(1)
        img.src = src
        form.appendChild(div)
        div.appendChild(img)
        div.appendChild(p)
        img.classList.add('card')
        input.value = 'Изменить' 
        input.type = 'button'
        input.style.margin = '5em'
        input.addEventListener('click', function() {
            form.innerHTML = casual.innerHTML
            form.querySelector('input[type="button"]').addEventListener('click', getHero)
        })
        form.appendChild(input)
    }

    if (heroName === 'железный человек') {
        let src = '/img/Iron-Man.jpg'
        favHero(heroName, src)
    } else if (heroName === 'человек паук') {
        let src = '/img/spider-man.jpg'
        favHero(heroName, src)
    } else if (heroName === 'капитан америка') {
        let src = '/img/cap.jpg'
        favHero(heroName, src)
    }

    if (heroName === 'флеш') {
        let src = '/img/flash.jpg'
        favHero(heroName, src)
    } else if (heroName === 'бетмен') {
        let src = '/img/batman.jpg'
        favHero(heroName, src)
    } else if (heroName === 'супермен') {
        let src = '/img/superman.jpg'
        favHero(heroName, src)
    }
}