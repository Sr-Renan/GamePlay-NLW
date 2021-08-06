import React  from 'react';
import { StatusBar } from 'react-native';
//Importando as Fonts
import { useFonts, } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
//Importando as rotas feitas no arquivo de routes
import { Routes } from './src/routes/';
//Importando componente de degarde.
import { Background } from './src/components/Background';
//Importando o Context para que todas as tela tenham acesso ao context de dados.
import { AuthProvider } from './src/hooks/auth';


export default function App(){
  //Importando e carregando as fontes para uso. e exibindo a SignIn somente depois das fontes confi no disposotivo.
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  //If para enquanto as fontes não carregar nao exibir tela de SignIn, usando IF e blibiteca Expo-app-loading que segura a tela de splash
  if(!fontsLoaded){
    return <AppLoading></AppLoading>
  };

  return(
    
    <Background>
      
       {/*Personalizando a barra de status */}
       <StatusBar
       barStyle = "light-content"
       backgroundColor = "transparent"
       translucent
       />
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>

   </Background>
   
  );
}