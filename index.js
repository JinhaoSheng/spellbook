const button = document.querySelector('button')

const sayHi = function(){
    const heading = document.querySelector('h1')
    heading.textContent = 'I changed it'
}


button.addEventListener('click', sayHi)