import React, {useState} from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

//Importando os componentes
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';


export function Home(){
    const [category, setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '2',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '4',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '3',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '4',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '7',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '3',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '8',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '2',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
    ]

        //Efeito de marcar e desmarcar.
        //Function para se o Id atual e mesmo que estou clicando quero desmarcar ele caso nao seja marcar o mesmo.
        function handleCategorySelect(categoryId: string){
            categoryId === category ? setCategory('') : setCategory(categoryId)
        };


        //Function para ao clicar em algum dos agendamentos da nossa flatlist ser redirecionado para nossa pagina de AppointmentDetails que são os detalhes do agendamento.
        const navigation = useNavigation();
        function handleAppointmentDetails () {
            navigation.navigate('AppointmentDetails')
        }

        //Função para navegação para pagida de criar novos agendamentos.  
        function handleAppointmentCreate () {
            navigation.navigate('AppointmentCreate')
        }

    return(

        <Background>
            
            <View style={styles.header}>
                
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
                
            </View>
                
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
                
            
            <ListHeader 
                    title="Partidas agendadas" 
                    subtitle="Total 6"
            />
            

            <FlatList  
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment 
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                    )}
                //Passando como um divisor de lista o nosso componente feito.
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={ {paddingBottom: 50} }
                //Styles da partida marcada
                style={styles.matches} 
                showsVerticalScrollIndicator={false}
                

                />

        </Background>

    );
} 