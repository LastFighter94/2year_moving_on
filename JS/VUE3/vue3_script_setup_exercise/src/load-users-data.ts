async function loadUsers(username: string): Promise<User | undefined> {
    const users: User[] = [
        {
            username: 'awesome38',
            name: 'mike',
            projects: ['vitest', 'vite']
        },
        {
            username: 'disaster38',
            name: 'jack',
            projects: ['burgers', 'cheese']
        }
    ]

    return users.find((user) => user.username === username)
}

interface User {
    username: string,
    name: string,
    projects: string[],
    coolness?: number
}

export async function loadUserData(username: string): Promise<User | undefined> {
    const user = await loadUsers(username)

    if (!user){
        throw new Error('no user found')
    }

    user.coolness = username === 'awesome38' ? 100 : -1

    return user
}
