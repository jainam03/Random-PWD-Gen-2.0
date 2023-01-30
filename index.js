let generateBtn = document.getElementById("generate-btn")
let clearBtn = document.getElementById("clear-btn")
let passwordField = document.getElementById("passwords")

let characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

generateBtn.addEventListener("click",function() {
    generate()
})

function generate(length) {
    let result1 = ' '
    let result2 = ' '

    const charactersLength = characters.length

    for(let i=0; i<length; i++) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength))
        result2 += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    passwordField.textContent = `${result1} AND ${result2}`

    generate(15)
}

clearBtn.addEventListener("click", function() {
    passwordField.textContent = ' '
    setTimeout(() => {
        window.location.reload()
    }, 210)
     
    setTimeout(() => {
        alert("All cleared")
    }, 200)
})