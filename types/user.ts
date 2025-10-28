export interface User {
    created: Date
    currentMonthSessions: number
    email: string
    name: string
    username: string
    pointsBalance: number
    pointsEarned: number
    totalSessions: number
    rewards?: string[]
    achievements?: string[]
}