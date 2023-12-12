// https://learn.javascript.ru/slots-composition

customElements.define('user-card', class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
        <div>Имя:
          <slot name="username"></slot>
        </div>
        <div>Дата рождения:
          <slot name="birthday"></slot>
        </div>
      `;
    }
  });

// https://learn.javascript.ru/shadow-dom-events
let inner = document.createElement('div');
document.addEventListener('test', () => console.log('test'))

inner.dispatchEvent(new CustomEvent('test', {
    bubbles: true,
    composed: true,
    detail: "composed"
  }));