// Variaveis
const tentative = document.querySelector("#tentative")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleClicktry)
btnAgain.addEventListener('click', handleClickagain)

function handleClicktry(event){
  event.preventDefault()
  
 if(tentative.value == randomNumber){
    toggleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
 }
 tentative.value = ""
 xAttempts++
}

function handleClickagain(){
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}




