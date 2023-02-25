import React from 'react'

export type UserType = {
    userName: string;
    firstName: string;
    lastName: string;
    mobileNo: string;
    email: string;
    password: string;
    userId: string
}

export type UserContextType = {
    user: UserType
    setUser: React.Dispatch<React.SetStateAction<UserType>>
    userError: UserType
    setUserError: React.Dispatch<React.SetStateAction<UserType>>
    setUserId: React.Dispatch<React.SetStateAction<string>>
    userId: string
    isLoggedIn: boolean
    login: (email: string, password: string) => void;
    logout: () => void;
    registerUser: (user: UserType) => void
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined)

export const useUserContext = () => {
    const userContext = React.useContext(UserContext)
    if(userContext === undefined) {
        throw new Error (
            'User context must be inside in User Context provider'
        )
    }
    return userContext;
}