import {expect, it, describe, test} from "vitest";

import ChildWrapperTs from "@/components/componentWrappers/ChildWrapperTs.vue";

describe("ChildWrapperTs.vue", () => {
    // вместо test можно использовать it
    test("ChildWrapperTs.vue default props", async () => {
        expect(ChildWrapperTs.props.wrapperColor.default).toContain("red");
    });
});
