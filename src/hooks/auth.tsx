import React , { createContext, useContext, useState, ReactNode } from 'react'

import * as AuthSession from 'expo-auth-session'

import { SCOPE, CLIENT_ID, CDN_IMAGE, REDIRECT_URI, RESPONSE_TYPE } from '../configs';


type User ={
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}
 type AuthContextData = {
     user: User;
 }


type AuthProviderProps = {
    children: ReactNode;
}
//Criando um const, que recebe um createContext vazio, mas e um AuthContextData
export const AuthContext = createContext({} as AuthContextData);


function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);
        
function SignIn() {
    try {
        setLoading(true);
//Passando pra onde o usuario deve ir ao comecar o processo de autenticação
        const authUrl = 'https://discord.com/api/oauth2/authorize?client_id=869723271355047936&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay&response_type=code&scope=identify%20email%20connections%20guilds'
        AuthSession.startAsync({ authUrl })
    } catch (error) {
        
    }
}
    return(
        <AuthContext.Provider value = {{user}}>
            { children }
        </AuthContext.Provider>
    )
}

//Criando o nosso propio hooks
function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }