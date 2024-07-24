let randomeNum = parseInt(Math.random() * 100 + 1)
console.log(randomeNum)

let userGuess = document.querySelector('.userfied')
let sumb = document.querySelector('#button')
let result = document.querySelector('.result')
let preGuess = document.querySelector('.prev')
let remGuess = document.querySelector('.remain')
let loOhigh = document.querySelector('.low-high')

loOhigh.style.margin = '0px 0px 20px 20px'

let addit = document.createElement('h2');
addit.setAttribute('class', 'mt')
let text = document.createTextNode('Start Again');


let Arrprev = [];
let numGuess = 1;
playgame = true;

if (playgame) {
    sumb.addEventListener('click', function (e) {
        e.preventDefault()
        console.log(userGuess.value)
        let guess = parseInt(userGuess.value)
        console.log(guess)
        validGuess(guess)
    })
}

function validGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 0) {
        alert('Please enter more than 0')
    }
    else if (guess > 100) {
        alert('Please enter less than 100')
    }

    else {
        Arrprev.push(guess)
        if (numGuess === 11) {
            messageDispaly(`Game Over Random Number is  ${randomeNum}`)
            endGame()
        }
        else {
            clinerGuess()// delet g
            checkGuess(guess)
        }
    }


}

function checkGuess(guess) {
    if (guess === randomeNum) {
        messageDispaly('You are Winner')
        endGame()
    }
    else if (guess > randomeNum) {
        messageDispaly('Number is tooo High')

    }
    else if (guess < randomeNum) {
        messageDispaly('Number is tooo Low')
    }

}

function clinerGuess() {
    userGuess.value = '';
    preGuess.innerText = `[ ${Arrprev} ]`
    numGuess++
    remGuess.innerText = (11 - numGuess)

}

function messageDispaly(message) {
    loOhigh.innerHTML = `<h3> ${message}</h3>`


}

function endGame() {
    userGuess.setAttribute('disabled', '')
    userGuess.value = '';
    addit.appendChild(text)
    result.appendChild(addit)
    playgame = false
    playGame()



}

function playGame() {
  let  sta = document.querySelector('.mt')
    sta.addEventListener('click', function () {
        randomeNum = parseInt(Math.random() * 100 + 1)
        userGuess.value = '';
        Arrprev = [];
        numGuess = 1;
        userGuess.removeAttribute('disabled', '');
        result.removeChild(addit)
        playgame = true

    })



}
