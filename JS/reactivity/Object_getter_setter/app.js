{/* <div id="app">
    <div>Price: ${{ price }}</div>
    <div>Total: ${{ price*quantity }}</div>
    <div>Taxes: ${{ totalPriceWithTax }}</div>
</div>

<script>
    var vm = new Vue({
        el: '#app',
        data: {
            price: 5.00,
            quantity: 2
        },
        computed: {
            totalPriceWithTax() {
                return this.price * this.quantity * 1.03
            }
        }
    })
</script> */}

//

// let price = 5
// let quantity = 2
// let total = price * quantity
// price = 20;
// console.log(`total is ${total}`) //тут будет 10, а на vue будет 40 при изменеии price

let price = 5
let quantity = 2
let total = 0
let totalTwo = 0
// let target = null
// let targetTwo = null
let storage = []

function record (target) {
    storage.push(target)
}

function refresh () {
    storage.forEach(run => run())
}

let target = () => { total = price * quantity }
let targetTwo = () => { totalTwo = price * quantity * 3 }


record(target)
record(targetTwo)
target()
targetTwo()

price = 20
console.log(total, totalTwo) // 10, 30
refresh()
console.log(total, totalTwo) // 40, 120


price = 30
refresh()
console.log(total, totalTwo) // 60, 180