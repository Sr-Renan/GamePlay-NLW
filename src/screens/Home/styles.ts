import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    //Estilização do Header
    header:{
        width: '100%',
        paddingHorizontal: 24,
        //Para ficar item na frente de item por padrão ele vem em colum.
        flexDirection: 'row',
        justifyContent: 'space-between',
        //Usando biblioteca react-native-iphone-x-helper, para pegar o espaço da barra e assim adicionar uma margin.
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,

    },


});