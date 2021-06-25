import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';




export function Routes(){
    return(
        //Envolvendo as rotas em um navigationContainer
         <NavigationContainer>
             <AuthRoutes></AuthRoutes>
         </NavigationContainer>
        
    )
};
