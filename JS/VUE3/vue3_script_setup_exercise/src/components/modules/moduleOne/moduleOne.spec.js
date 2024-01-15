import { expect, describe, test } from 'vitest'
import ModuleOne from "@/components/modules/moduleOne/moduleOne.vue";
import {mount} from "@vue/test-utils";

describe("ModuleOne.vue testing", () => {
    test('test module one init', () => {
        expect(1 + 1).toBe(2)
    })

    test('test component mounted', () => {
        expect(ModuleOne).toBeTruthy();
    })

    test('testing props value to be passed', () => {
        const wrapper = mount(ModuleOne, {
            props: {
                description: "Test props value",
            },
        });

        expect(wrapper.text()).toContain("Test props value");
    })
});
