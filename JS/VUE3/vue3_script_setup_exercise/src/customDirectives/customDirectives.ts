export const testDirectiveFontSize = {
    // runs before mount
    beforeMount: (el, binding) => {
        // binding - value (v-directive="value")
        el.style.fontSize = binding.value + 'px';
    },
        // runs whenever the components updates (meaning - the reactive var in directives changes - for example)
    updated: (el, binding) => {
        el.style.fontSize = binding.value + 'px';
    }
}

export const testDirectiveFontSizeTwo = {
    beforeMount: (el, binding) => {
        let size = 12

        switch (binding.arg){
            case 'small':
                size = 14
                break
            case 'large':
                size = 24
                break
        }

        // binding - atr (v-directive:atr)
        el.style.fontSize = size + 'px';
    }
}

export const testDirectiveFontSizeThree = {
    // runs before mount
    beforeMount: (el, binding) => {
        console.log(binding.modifiers, 'binding.modifiers', binding.value, binding)

        // you can also pass binding value and even binding atr with multiple modifiers
        // <p v-test-directive-font-size-three:argbind.large.red.test="30">Arg binding test 2</p>
        // binding.arg = argbind, binding.modifiers = {large: true, red: true, test: true}, binding.value = 30

        // binding - atr (v-directive.modifierOne.modifierTwo)
        // binding.modifiers.modifierOne = true - this logic flow
        // binding.modifiers.modifierTwo = true - this logic flow

        if (binding.modifiers.red) el.style.color = 'red'
        if (binding.modifiers.test) el.innerText = 'test'

        // ... e.t.c

        el.style.fontSize = binding.value + 'px';
    }
}

// another way

export const customDirectivesArr = [
    {directiveName: 'test-directive-font-size', directiveObj: testDirectiveFontSize},
    {directiveName: 'test-directive-font-size-two', directiveObj: testDirectiveFontSizeTwo},
    {directiveName: 'test-directive-font-size-three', directiveObj: testDirectiveFontSizeThree}
]
