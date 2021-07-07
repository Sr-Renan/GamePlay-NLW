import React from "react";
import { ScrollView, } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import { styles } from './styles';
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) =>  void;
}

export function CategorySelect({ categorySelected, setCategory }: Props){
    return(
        
        <ScrollView
            horizontal
            style={styles.container}
            //Para não aparecer barra de rolagem
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
            >
            {
                //Percorendo as categories e para cada categoria vamos gerar um novo componente
                categories.map(category =>(
                    <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                    />
                    
                ))
            }
        </ScrollView>
        
    );
}