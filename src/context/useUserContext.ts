import { UserType } from './UserContext';
import React from 'react'

export default function useUser() {
    const [user, setUser] = React.useState<UserType>({} as UserType)
    const [userId, setUserId] = React.useState<string>('')
    const [userError, setUserError] = React.useState<UserType>({} as UserType)
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)

    const login = (email: string, password: string) => {

    }

    const logout = () => {

    }

    const registerUser = (user: UserType) => {

    }

    return {
        user,
        setUser,
        userError,
        setUserError,
        login,
        logout,
        registerUser,
        setIsLoggedIn,
        isLoggedIn,
        userId,
        setUserId
    }
}