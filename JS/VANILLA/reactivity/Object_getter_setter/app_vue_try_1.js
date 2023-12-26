class Vue {
    constructor(data, methods, template) {
        this.data = data
        this.methods = methods
        this.template = template
    }

    mount(id){
        document.getElementById(id).innerHTML = this.template
    }

    setDataValues(){
        Object.entries(this.data).forEach(entry => {
            let key = entry[0]
            let value = entry[1]
            console.log(key)
            console.log(value)
            this.template = this.template.replaceAll(`{${key}}`, value)

            this.mount("app")
        });
    }
}


async function test() {
    const result = await x();
    console.log(result); // --> 'done!';
}