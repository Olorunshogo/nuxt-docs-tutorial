
interface UserSession {
    token: string | null;
}

export function useUserSession() {
    // Replace with actual session management logic
    const session = useState<UserSession | null>('user-session', () => null)

    return { session }
}