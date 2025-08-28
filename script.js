let plus = document.querySelector(`.plus`)
let minus = document.querySelector(`.minus`)
let multi = document.querySelector(`.multiplication`)
let delenie = document.querySelector(`.delenie`)
let inp1 = document.querySelector(`.inp1`)
let inp2 = document.querySelector(`.inp2`)
let result = document.querySelector(`.h2`)




plus.addEventListener(`click`, ()=>{
    let num1 = Number(inp1.value)
let num2 = Number(inp2.value)
    result.innerHTML = num1 + num2
})


minus.addEventListener(`click`, ()=>{
    let num1 = Number(inp1.value)
let num2 = Number(inp2.value)
    result.innerHTML = num1 - num2
})


multi.addEventListener(`click`, ()=>{
    let num1 = Number(inp1.value)
let num2 = Number(inp2.value)
    result.innerHTML = num1 * num2
})


delenie.addEventListener(`click`, ()=>{
    let num1 = Number(inp1.value)
let num2 = Number(inp2.value)
    result.innerHTML = num1 / num2
})