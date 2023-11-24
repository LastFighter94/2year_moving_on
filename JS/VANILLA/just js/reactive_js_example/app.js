const obj = reactive({
    a: 0,
    b: 1,
})

let runningReaction = null;

// #################################################################################

// данные функции вызываются при изменении объекта обернутого в reactive
autoRun(() => {
    console.log("obj.a =", obj.a);
})

autoRun(() => {
    console.log("obj.b * 2 =", obj.b * 2)
})

// #################################################################################

// 

function reactive(obj){
    return Object.entries(obj).reduce((acc, [key, val]) => {
        let value = val;
        const deps = new Set();
        Object.defineProperty(acc, key, {
            get(){
                if (runningReaction && !deps.has(runningReaction)){
                    console.log('init')
                    deps.add(runningReaction);
                }
                return value;
            },
            set(newValue){
                if (hasChanged(value, newValue)){
                    value = newValue;
                    deps.forEach(f => f());
                }
            },
            enumerable: true,
        });
        return acc;
    }, {});
}

// проверка на то что значения неравны друг другу и оба этих значение не 
// равны NaN (для этого нужно чтобы хотя бы одно из значений было равно самому себе)

function hasChanged(newVal, oldVal){
    return newVal !== oldVal && (newVal === newVal || oldVal === oldVal)
}

function autoRun(fn) {
    runningReaction = fn;
    fn();
    runningReaction = null;
}