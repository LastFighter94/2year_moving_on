import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import ParentWrapper from "./components/componentWrappers/ParentWrapper.vue";
import ChildWrapper from "./components/componentWrappers/ChildWrapper.vue";
import ErrorBoundary from "./ErrorBoundary.vue";
import {
    customDirectivesArr,
    testDirectiveFontSize,
    testDirectiveFontSizeThree,
    testDirectiveFontSizeTwo
} from "./customDirectives/customDirectives.ts";
import ChildWrapperTs from "./components/componentWrappers/ChildWrapperTs.vue";
import ParentWrapperTs from "./components/componentWrappers/ParentWrapperTs.vue";
import ErrorBoundaryTs from "./ErrorBoundaryTs.vue";

let app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
    // handle error, e.g. report to a service
    console.error('APP CONFIG ERROR HANDLER!')
    console.error(err, "\n", instance, "\n", info)
    console.error('#######################')
}

app
    .component('ParentWrapper', ParentWrapper)
    .component('ParentWrapperTs', ParentWrapperTs)
    .component('ChildWrapper', ChildWrapper)
    .component('ChildWrapperTs', ChildWrapperTs)
    .component('ErrorBoundary', ErrorBoundary)
    .component('ErrorBoundaryTs', ErrorBoundaryTs)

const version = Number(app.version.split('.')[0])
console.log('Current VUE project version =', version)

// Vue 2 => Vue.directive

// app.directive('test-directive-font-size', testDirectiveFontSize)
// app.directive('test-directive-font-size-two', testDirectiveFontSizeTwo)
// app.directive('test-directive-font-size-three', testDirectiveFontSizeThree)

customDirectivesArr.forEach(directive => app.directive(directive.directiveName, directive.directiveObj))

app.mount('#app')
