import {expect, it, describe, test} from "vitest";

import ChildWrapper from "@/components/componentWrappers/ChildWrapper.vue";

describe("ChildWrapper.vue", () => {
    // вместо test можно использовать it
    test("ChildWrapper.vue default props", async () => {
        expect(ChildWrapper.props.wrapperColor.default).toContain("red");
    });
});
