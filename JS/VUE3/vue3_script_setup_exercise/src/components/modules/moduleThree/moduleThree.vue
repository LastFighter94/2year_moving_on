<script lang="ts">
import {ref, toRefs} from "vue";

export default {
    // без этого просто setup(props) не срабатывает почему-то
    // props: [
    //     'description',
    //     'tsInfo',
    //     'moduleNumber'
    // ],

    props: {
        description: {
            type: String
        },
        tsInfo: {
            type: String
        },
        moduleNumber: {
            type: Number
        }
    },
    setup(props, context){
        const { description, tsInfo, moduleNumber } = toRefs(props)

        // CHANGE testVariable TO TEST TYPESCRIPT!
        interface ITestInterface {
            keyOne: string,
            keyTwo: number[]
        }

        const testVariable: ITestInterface = {
            keyOne: 'string',
            keyTwo: [1, 2, 3]
        }

        const testEmit = (arg) => context.emit('testEmit', arg)

        // Attributes (Non-reactive object, equivalent to $attrs)
        console.log(context.attrs)

        // Slots (Non-reactive object, equivalent to $slots)
        console.log(context.slots)

        // ATTRS AND SLOTS!
        // Also note that, unlike props, the properties of attrs and slots are not reactive.
        // If you intend to apply side effects based on changes to attrs or slots, you should do so inside an onBeforeUpdate lifecycle hook.

        // Emit events (Function, equivalent to $emit)
        console.log(context.emit)

        // Expose public properties (Function)
        console.log(context.expose)

        const test = () => publicCount.value++

        const publicCount = ref(0)
        const privateCount = ref(0)
        // selectively expose local state
        context.expose({test, publicCount})

        return {
            testEmit, publicCount, privateCount, test
        }
    }
}

</script>

<template>
    <div class="module">
      <h3>Module {{moduleNumber}}</h3>

      <p>Description: {{description}}, <span class="ts-and-no-ts">TsInfo: {{tsInfo}}</span></p>

      <p @click="$emit('testEmit', 100)">click to emit from $emit</p>
      <p @click="testEmit(200)">click to emit from setup function</p>

      <p>Private count: {{privateCount}}, public count {{publicCount}}</p>
    </div>
</template>

<style>
.module {
    display: flex;
    flex-direction: column;
    border-right: 2px solid black;
    padding: 10px;
    max-width: 400px;
}

.no-ts, .ts, .ts-and-no-ts {
    font-size: 26px;
}

.no-ts {
    color: red;
}

.ts {
    color: blue;
}

.ts-and-no-ts {
    color: orange;
}
</style>
