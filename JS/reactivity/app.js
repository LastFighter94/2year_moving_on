// https://learn.javascript.ru/custom-elements

class TestComponent extends HTMLElement {
    getProp(key) {
        return this.getAttribute(key)
    }

    render() {
        this.innerHTML = `
        <div class="testComponent">
            Name: ${this.getProp('name')} <br>
            Age: ${this.getProp('age')} <br>
            City ${this.getProp('city')}
        </div>
        `
      }
    
    
      connectedCallback() {
        if (!this.rendered) {
            console.log('mounted or created')

            this.render();
            this.rendered = true;
        }
      }
    
      static get observedAttributes() {
        return ['name', 'age', 'watch'];
      }
    
      attributeChangedCallback(propName, oldValue, newValue) { 
        if (this.getAttribute('watch') !== 'true') return 

        console.log(propName, 100)
        console.log(oldValue, 'oldValue')
        console.log(newValue, 'newValue')
        console.log('############')

        this.render();
      }
  
}

// setTimeout(() => {
//     customElements.define("test-component", TestComponent);
// }, 4000)

customElements.define("test-component", TestComponent);

setTimeout(() => Moscow.setAttribute('name', 'Viktor!'), 1000); // работает в зависимости от того вверху или внизу расположен скрипт

const testDiv = document.querySelector('#test')

let stepa = document.createElement('test-component')
stepa.setAttribute('name', 'Stepa')
stepa.setAttribute('age', '33')
stepa.setAttribute('city', 'Angarsk')

testDiv.appendChild(stepa)