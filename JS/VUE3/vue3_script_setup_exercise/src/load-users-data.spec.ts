import {describe, test, expect} from "vitest";
import {loadUserData} from "./load-users-data.ts";

describe('loadUserData', () => {
    test('load user data as expected', async () => {
        const user = await loadUserData('awesome38')

        expect(user).toEqual({
           "coolness": 100,
           "name": "mike",
           "projects": [
             "vitest",
             "vite",
           ],
           "username": "awesome38",
        })
    })

    test('sets coolness level appropriately', async () => {
        const mike = await loadUserData('awesome38')
        const jack = await loadUserData('disaster38')

        expect(mike?.coolness).toBe(100)
        expect(jack?.coolness).toBe(-1)
    })

    // если написать test.fails - то все сработает (точнее мы проигнорируем test case - даже если он валится)

    test('throws an error for non-existing users', async () => {
        expect(async () => await loadUserData('fake-user')).rejects.toThrowError('no user found')
    })
})
