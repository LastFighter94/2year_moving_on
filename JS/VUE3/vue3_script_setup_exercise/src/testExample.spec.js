import { expect, describe, test } from 'vitest'
import { sumTestExample } from "@/sumTestExample.js";

describe("testExamples", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sumTestExample(1, 2)).toBe(3)
    })
});
