import React, { ReactNode } from "react";
//Importando blibioteca para fazer um efeito de degrade.
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
    children: ReactNode;
}
//Criando componente de bacground em degrade.
export function Background({ children }: Props){
    const { secondary80, secondary100 } = theme.colors;

    return (

        <LinearGradient style = {styles.container} colors = {[secondary80, secondary100]}>
        {children}
        </LinearGradient>

    )
}