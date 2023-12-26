import {defineCustomElement} from "vue";
import VueTestWidget from "@/components/widget/TestWidget.ce.vue";

export const TestWidget = defineCustomElement(VueTestWidget)

export function register(tagName = 'test-widget'){
    customElements.define(tagName, TestWidget)
}
