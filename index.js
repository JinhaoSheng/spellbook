const button = document.querySelector('button')

const sayHi = function(){
    const heading = document.querySelector('#heading2')
    heading.textContent = 'I changed it'
}


button.addEventListener('click', sayHi)