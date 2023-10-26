const cars = [
    {id: 1, title: 'car1', price: 10, img: './car1.jpeg'},
    {id: 2, title: 'car2', price: 20, img: './car2.jpeg'},
    {id: 3, title: 'car3', price: 30, img: './car3.jpeg'}
]

const toHTML = (car) => {
    return `
        <div class="col">
            <div class="card">
                <img class="card-img-top" style="height: 300px" src="${car.img}" alt="${car.title}"/>
                <div class="card-body">
                    <h5 class="card-title">${car.title}</h5>
                    <a href="#" class="btn btn-primary" data-btn="price" data-id="${car.id}">Watch price</a>
                    <a href="#" class="btn btn-danger">Delete</a>
                </div>
            </div>
        </div>
    `
}

function render(){
    // const html = cars.map(car => toHTML(car)).join("")
    const html = cars.map(toHTML).join("") // то же самое что и наверху

    document.querySelector('#cars').innerHTML = html
}

render()

const priceModal = $.modal({
    title: 'Car price',
    closable: true,
    // content: `
    //     <h4>Modal is working</h4>
    //     <p>Lorem ipsum dolor sit.</p>
    // `,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler(){
            priceModal.close()
        }},
        // {text: 'Cancel', type: 'danger', handler(){
        //     console.log('do something')
        // }}
    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id

    if (btnType === 'price'){
        const car = cars.find(c => c.id === id)

        priceModal.setContent(`
            <p>${car.title.toUpperCase()} price: <b>${car.price} $</b></p>
        `)

        priceModal.open()
    }
})
