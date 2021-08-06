import React from 'react';

import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import { styles } from './styles';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { GuildProps } from '../../components/Guild';

type Props = {
    handleGuildSelect : (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: false,
        },
        {
            id: '2',
            name: 'Fortnite',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '4',
            name: 'WarFace',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '5',
            name: 'Minecraft',
            icon: 'image.png',
            owner: false,
        },
        
    ]


    return(
        <View style={styles.container}>
            <FlatList contentContainerStyle={ {paddingBottom: 50, paddingTop: 30} } style={styles.guilds}
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild 
                        data={item} 
                        onPress={() => handleGuildSelect(item) }
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider  isCentered/>}
                ListHeaderComponent={ () => <ListDivider  isCentered /> }
            />
        </View>
    
    );
}