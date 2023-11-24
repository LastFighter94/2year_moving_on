<script setup lang="ts">
import {ref} from "vue";

const rows = [1,2,3,4,5,6,7,8,9,10]
const seatsInRow = [1,2,3,4,5,6]

const seatKeys = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f'
}

const passengers = []

rows.forEach(r => {
    const rNum = () => {return +(Math.random()*10).toFixed()}

    seatsInRow.forEach(s => {
        let nameStr = 'name'
        let id = r + s
        nameStr += id

        if (s === rNum() || s === rNum() || s === rNum()) {
            console.log('test', r, s)
            return
        }

        passengers.push({
            name: nameStr,
            id: id,
            age: r * 10 + 5 + s,
            row: r,
            seat: s
        })
    })
})


function showPassengerInfo(row, seat){
    let passengerInfoDiv = document.getElementById('passengerInfo')
    passengerInfoDiv.style.display = 'block'
    passengerInfo = passengers.find(i => {
        return i.row === row && i.seat === seat
    })

    if (passengerInfo === undefined){
        debugger
        passengerInfoDiv.innerHTML = `
        Место не занято!
    `
        passengerFormShow.value = true
        return
    }



    passengerInfoDiv.innerHTML = `
        Место занято! Выберите другое!
    `
    passengerFormShow.value = false
}

console.log(passengers)

let passengerInfo = null

const passengerFormShow = ref(false)

const isSeatTaken = (row, seat) => {
    return passengers.some(i => {
        return i.row === row && i.seat === seat
    })
}

</script>

<template>
<div class="nav">
    <h3>Lalala</h3>

    <h3>opopops</h3>
</div>

<div id="passengerInfo">

    <div id="test" v-if="passengerFormShow">
        <input type="text" placeholder="введите ФИО"><br>
        <input type="text" placeholder="введите passport"><br>
    </div>
</div>

<div v-for="row in rows" class="row">
    <div v-for="seat in seatsInRow" class="seat" @click="showPassengerInfo(row, seat)"
    :class="isSeatTaken(row, seat) ? 'taken' : ''">
        {{row}} {{seatKeys[seat]}}
    </div>
</div>

</template>

<style scoped lang="scss">
.nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #75c2cc;
    color: #ffffff;
    margin-bottom: 20px;
    padding: 0 10px 0 10px;
}

.row {
    display: flex;
}

.seat {
    width: 40px;
    height: 40px;
    margin: 10px;
    background-color: #747bff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
}

.taken {
    background-color: red;
}

.row {
    .seat:nth-child(3) {
        margin-right: 80px;
    }
}

#passengerInfo {
    border: 3px dotted black;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 80%;
    display: none;
}
</style>
