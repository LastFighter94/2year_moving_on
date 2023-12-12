// https://learn.javascript.ru/shadow-dom

elem.attachShadow({mode: 'open'});
// у теневого дерева свои стили (2)
elem.shadowRoot.innerHTML = `
<style> p { font-weight: bold;} 
.testComponent {
    width: 150px; height: 150px;
    margin: 10px; padding: 15px;
    background: #ac03ac; color: white;
}</style>
<p>Hello, John!</p>
`;

let kostya = document.createElement('test-component')
kostya.setAttribute('name', 'kostya')
kostya.setAttribute('age', '53')
kostya.setAttribute('city', 'Muhosransk')

elem.shadowRoot.appendChild(kostya)

let shadowDOMElementChildTest = document.createElement('div')
shadowDOMElementChildTest.attachShadow({mode: 'open'});
shadowDOMElementChildTest.shadowRoot.innerHTML = `
<style>p {padding: 10px; background: orange;}</style>
<p>Shadow root child test</p>
`

kostya.appendChild(shadowDOMElementChildTest)

console.log(shadowDOMElementChildTest.shadowRoot.host)
console.log(elem.shadowRoot.host)

// https://learn.javascript.ru/template-element

// console.log(testTemplate, 'testTemplate')

// let templateDiv = document.createElement('div')
// templateDiv.append(testTemplate.content.cloneNode(true));

// document.body.append(templateDiv);

// Не особо понятно зачем вообще нужен этот инструмент - тем более инкапсуляция стилей в нем не работает