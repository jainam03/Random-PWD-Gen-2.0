let generateBtn = document.getElementById("generate-btn")
let clearBtn = document.getElementById("clear-btn")
let passwordField = document.getElementById("passwords")

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={,[,},],,,|,:,;,<,>,.?/";

generateBtn.addEventListener("click",function() {
    generate(15)
})

function generate(length) {
    let result1 = ' '
    let result2 = ' '

    const charactersLength = characters.length

    for(let i=0; i<charactersLength; i++) {
        result1 = characters.charAt(Math.floor(Math.random() * charactersLength))
        result2 = characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    passwordField = `${result1} and ${result2}`

    generate(15)


}