const app = {

    init: function() {
        var spellArray =[]
        const form = document.querySelector('form')
        const Delete = document.querySelector('#delete')
        form.addEventListener('submit', ev => {
            this.handleSubmit(ev, spellArray)
            console.log(spellArray)
      })
        Delete.addEventListener('click', Array => {
            this.handleDelete(spellArray)
            console.log(spellArray)
        })
        
    },
  
    renderProperty: function(name, value) {
      const el = document.createElement('span')
      el.textContent = value
      el.classList.add(name)
      return el
    },


  
    renderItem: function(spell) {
      // ['name', 'level']
      properties = Object.keys(spell)
      // collect an array of renderProperty's return values
      // (an array of <span> elements)
      const childElements = properties.map(property => {
         return this.renderProperty(property, spell[property])
      })
      const item = document.createElement('li')
      item.classList.add('spell')
      // append each <span> to the <li>
      childElements.forEach(el => {
        item.appendChild(el)
      })
      return item
    },
  
  
  
    handleSubmit: function(ev, array) {
      ev.preventDefault()
      const f = ev.target
      const spell = {
        name: f.spellName.value,
        level: f.level.value,
      }
      array.push(spell)
      const item = this.renderItem(spell)
      const list = document.querySelector('#spells')
  
      list.appendChild(item)
  
  
  
      f.reset()
  
    },

    handleDelete: function(array){
        const list = document.querySelector('#spells')
        list.removeChild(list.lastChild)
        array.pop()
    }
  
  }
  
  
  
  app.init()
