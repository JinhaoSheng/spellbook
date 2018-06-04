const button = document.querySelector('#button')

const sayHi = function(){
    const heading = document.querySelector('#heading2')
    heading.textContent = 'I changed it'
}

const form = document.querySelector('form')
button.addEventListener('click', sayHi)
function myFunction(){
    const heading2 = document.querySelector("#heading3")
    heading2.textContent = form.elements["formtext"].value
}


