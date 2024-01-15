<script setup>
import {reactive, ref, toRefs, watch, watchEffect, watchPostEffect} from "vue";

const question = ref('')
const answer = ref('')
const responseData = ref('')

// async example - you can modify it
// https://www.youtube.com/watch?v=me4PgSUroBg&list=PL_euSNU_eLbfgYqSbg3LWTtq26cpXa8XF&index=17
watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.indexOf('?') > -1) {
        answer.value = 'Thinking ... ';
        responseData.value = '';
        try {
            const res = await fetch('https://yesno.wtf/api');
            const resJson = await res.json();
            responseData.value = resJson;
            answer.value = resJson.answer;
        } catch (error) {
            answer.value = 'Error!. Could not reach the API';
        }
    }
});

// EXAMPLE 2 - WATCH

const x = ref(0)
const y = ref(0)

// watch(x, (newX) => {
//     console.log(`value of x is ${newX}`)
// })
//
// watch(y, (newY) => {
//     console.log(`value of y is ${newY}`)
// })
//
// watch([x, y], ([newX, newY]) => {
//     console.log(`values of x and y are x: ${newX}, y: ${newY}`)
// })
//
// watch(
//     () => x.value + y.value,
//     (sum) => {
//         console.log(`sum value is ${sum}`)
//     }
// )

// watch([x, () => {
//     return y.value + 'test'
// }], ([newX, newY]) => {
//     console.log(`value of x is ${newX} and y is ${newY}`)
// })

// EXAMPLE 3

const obj = reactive({ count: {value: 0, name: 'Jake'}})
const objRef = ref({ count: {value: 0, name: 'Jake'}})

watch(
    () => obj.count.value,
    (newCount, oldCount) => {
        console.log(`new count value is ${newCount}, old is ${oldCount}`)
    },
    { deep: true }
)

watch(
    () => objRef.value.count.value,
    (newCount, oldCount) => {
        console.log(`new count value is ${newCount}, old is ${oldCount}`)
    },
    { deep: true }
)

// EXAMPLE 4

const todoId = ref(1)
const data = ref(null)

const count = ref(0)

// watch(
//     todoId,
//     async () => {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
//         data.value = await response.json()
//     },
//     {immediate: true}
// )

// watch effect - это как computed обертка - для всех свойств, что внутри него

watchEffect(async onInvalidate => {
// watchEffect(async () => {
    onInvalidate(() => {
        console.log('срабатывает до того как выполнится код ниже !!!')
    })

    console.log(count.value, 'watchEffect')
    document.getElementById('testCountId') && console.log(document.getElementById('testCountId').innerText)
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)

    // console.log(count.value, 'watchEffect') - will not work because - await, async - should be passed before async logic
    data.value = await response.json()
})

// !!! !!! !!!
// чтобы не использовать document.getElementById('testCountId')
// мы просто пишем {flush: 'post'} и уже после загрузки DOM все отстреливает

// watchEffect(async () => {
//
// }, {flush: 'post'})
//
// // is the same as
//
// watchPostEffect(async () => {
//
// })

// EXAMPLE 5

// UNWATCH

// чтобы была возможность остановить watcher - мы записываем его в переменную, а потом вызываем
// его из этой переменной (по любой удобной нам логике)
const notes = ref('')
const notesArePublic = ref(false)

const watcher = watchEffect(() => {
    console.log(notes.value, 'UNWATCH EXAMPLE')
    console.log(notesArePublic.value, 'UNWATCH EXAMPLE')
})

const stopWatcherExample = () => {
    watcher()
}

// deep watch effect

// Another important note: watchEffect is not watching your variables deeply.
// If we had a single object of data, which contained both of our variables, those variables updating would not trigger the side effect.
// In this case, we could convert the reactive object to refs, which would then correctly trigger our side effect.

// IT WORKS FINE WITHOUT (object to refs https://www.thisdot.co/blog/vue-3-composition-api-watch-and-watcheffect)

// WATCH - same syntax

// const stopSaving = watch(
//     someData,
// (value, oldValue, onInvalidate) => {
//         console.log(value, oldValue)
//         onInvalidate(() => {
//             console.log('something')
//         });
//     },
// );

// EXAMPLE 6

// OnInvalidate

const textContent = ref('')
const isTyping = ref(false)

watchEffect((onInvalidate) => {
    if (textContent.value.length > 0){
        isTyping.value = true

        const showTypingStatus = setTimeout(() => {
            isTyping.value = false
        }, 2000)

        onInvalidate(() => {
            clearInterval(showTypingStatus)
        })
    }
})
</script>

<template>
    <div>
        <h3>Ask yes or no question (EXAMPLE 1)</h3>
        <input type="text" placeholder="Ask you question" v-model="question"/>

        <p>Answer: {{answer}}</p>
        <img :src="responseData.image" style="width: 200px;" alt="">

        <h3>EXAMPLE 2</h3>

        <div>x: <input type="text" v-model="x"/></div>
        <div>y: <input type="text" v-model="y"/></div>

        <h3>EXAMPLE 3</h3>

        <div>Count: <input type="text" v-model="obj.count.value"/></div>
        <div>CountRef: <input type="text" v-model="objRef.count.value"/></div>

        <h3>EXAMPLE 4</h3>

        <p>TodoId <input type="text" v-model="todoId"/></p>
        <p>Count <input type="text" v-model="count"/></p>

        <p id="testCountId">{{count}}</p>

        <p>{{data}}</p>

        <h3>EXAMPLE 5</h3>

        <div>
            <textarea v-model="notes" />
        </div>

        <div>
            <label>
                Make notes public:

                <input type="checkbox" v-model="notesArePublic" />
            </label>
        </div>

        <button @click="stopWatcherExample">stopWatcherExample</button>

        <h3>EXAMPLE 6</h3>

        <p><b>Type to see what happens</b></p>

        <textarea v-model="textContent"></textarea>

        <p v-if="isTyping">User is typing</p>
    </div>
</template>

<style scoped>

</style>
