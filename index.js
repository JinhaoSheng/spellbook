const button = document.querySelector('#button')

const sayHi = function(){
    document
        .querySelector("#heading2")
        .textContent = 'I changed it!'
}
button.addEventListener('click', sayHi)

const form = document.querySelector('form')
function myFunction(){
    const heading2 = document.querySelector("div")
    heading2.textContent += form.elements["formtext"].value + ' '
}


