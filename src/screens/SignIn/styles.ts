import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

//Criando um objeto de estilização.
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', //Alinhando na horizontal.
        alignItems: 'center', //Alinhando na vertical.
        
    },
    //Style da imagem
    image:{
        
        width: '100%',
        height: 360,

    },
    //Style da View
    content:{

        marginTop: -40,
        paddingHorizontal: 50,


    },
    //Style do Titulo principal
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        //altura entre as linhas
        lineHeight: 40,

    },
    //Style do SubTitulo
    subtitle: {

        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        //altura entre as linhas
        lineHeight: 25,
    }



});