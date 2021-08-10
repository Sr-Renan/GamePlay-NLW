import React from 'react';

import { 
    View,
    Text, 
    Image,
    Alert

} from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Background } from '../../components/Background';
//Importando o Componente Button feito na pasta conponets
import { ButtonIcon } from '../../components/ButtonIcon';
//Importando a Imagem
import IllustrationImg from '../../assets/illustration.png'; 
//Importando estilização
import { styles } from './styles';




export function SignIn(){

    const { user, signIn } = useAuth(); 

    //função de navegação para signIn  
    async function handleSignIn() {
      try {
        await signIn();
      }catch (error) {
        Alert.alert(error)
      }
    }

    return(
    <Background>
        
        <View style = {styles.container}>
            

        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"></Image>

            <View style= {styles.content}>

                <Text style={styles.title}>
                    Conecte-se {'\n'} 
                    e organize {'\n'} 
                    suas jogatinas 
                    
                </Text>

                <Text style={styles.subtitle}>
                Crie grupos para jogar seus games {`\n`} 
                favoritos com seus amigos 
            </Text>
                
            <ButtonIcon title="Entrar com Discord" 
            onPress={handleSignIn}/>

            </View>

        </View>

    </Background>
    );
}