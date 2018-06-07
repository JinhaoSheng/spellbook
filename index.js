const app = {

    init: function() {
        var spellArray =[]
        var spellMap = new Map()
        var spellMap2 = new Map()
        var n = 0
        const form = document.querySelector('form')
        const ul = document.querySelector('#spells')
        form.addEventListener('submit', ev => {
            this.handleSubmit(ev, spellArray)
            var deleteButton = document.createElement('button')
            var text = document.createTextNode('Delete')
            deleteButton.appendChild(text)
            ul.appendChild(deleteButton)
            
            spellMap.set(deleteButton, spellArray[spellArray.length - 1])

            deleteButton.addEventListener('click', Array => {
                var a = spellMap.get(deleteButton)
                this.handleDelete(spellArray, a)
            })
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
      console.log(list)
  
  
  
      f.reset()
  
    },

    handleDelete: function(array, thing){
        const list = document.querySelector('#spells')
        // list.removeChild(spellMap.get(button))
        let b = document.createElement('li')
        b.classList.add("spell")
        
        const span1 = document.createElement('span')
        span1.classList.add("name")

        const span2 = document.createElement('span')
        span2.classList.add("level")

        span1.textContent = thing.name
        span2.textContent = thing.level

        b.appendChild(span1)
        b.appendChild(span2)
        
        console.log(b)
        console.log(list.firstChild)

    }
  
  }
  
  
  
  app.init()
