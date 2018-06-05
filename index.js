const form = document.querySelector('form')



const changeHeading = function(ev) {

  ev.preventDefault()
  const f = ev.target
  
  const enteredSpell = document.createTextNode(f.spellName.value)
  const enteredSpell2 = document.createTextNode(f.spellName2.value)
  const spellUl = document.querySelector("#spells")
  let a = createListUsingSpan(enteredSpell, enteredSpell2)
  spellUl.appendChild(a)
}

function createListUsingSpan(enteredSpell, enteredSpell2){
    const span = document.createElement("span")
    const span2 = document.createElement("span")
    span.appendChild(enteredSpell)
    span.appendChild(enteredSpell2)
    return createList(span, span2)
}

function createList(span, span2){
    const list = document.createElement("li")
    list.appendChild(span)
    list.appendChild(span2)
    return list
}




form.addEventListener('submit', changeHeading)