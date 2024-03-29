import React from 'react';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds/insdex';
import { GuildProps } from '../../components/Guild';
import { Background } from '../../components/Background';



export function AppointmentCreate(){
  const [ category, setCategory ] = useState('');
  
  function handleCategorySelect(categoryId: string){
    setCategory(categoryId)
  };

  //Criando um estado para a exibição da modal:
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  //Function para abrir a modal
  function handleOpenModal() {
    setOpenGuildsModal(true);
  }

  //Function para fechar a modal
  function handleCloseModal() {
    setOpenGuildsModal(false);
  }

  //Armazenando a guidl selecionada:
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
  function handleGuildSelect( guildSelect: GuildProps) {
    setGuild(guildSelect); 
    setOpenGuildsModal(false);
  }

  return (
    
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
      style={styles.container}
    >
      <Background>
        <ScrollView>     

          <Header  
            title="Agendar partida"
          />

          <Text style={[styles.label , { marginLeft: 24 , marginTop: 30, marginBottom: 18 }]}>
            Categoria
          </Text>

          <CategorySelect 
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />
          
          <View style={styles.form}>
            <RectButton onPress={(handleOpenModal)}>
              <View style={styles.select}>
                { // Se tem icon mostre a imagem com o icone caso não mostrar a imagem
                  guild.icon ? <GuildIcon /> : <View style={styles.image} />
                }
              
                <View style={styles.selectBody}>
                  <Text style={styles.label}> 
                    { // Se a guild.name existir mostre o nome caso não mostre Selecione um servidor
                      guild.name ? guild.name : 'Selecione um servidor'
                    }
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
                
              </View>
            </RectButton>
            
            <View style={styles.field}> 
              <View>
                <Text style={[styles.label, {marginBottom: 12}]}>
                  Dia e mês
                </Text>

                <View style={styles.colum}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, {marginBottom: 12}]}>
                  Hora e minuto
                </Text>

                <View style={styles.colum}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  :
                </Text>
                <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
            
            <View style={[styles.field, {marginBottom: 12 }]}>
                <Text style={styles.label}>
                  Descrição
                </Text>

                <Text style={styles.caracteresLimit}>
                  Max 100 caracteres
                </Text>
            </View> 
              
            <TextArea 
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>

          </View>        
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseModal}>
        <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView>

    </KeyboardAvoidingView>
  );
}