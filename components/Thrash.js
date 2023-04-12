import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons'; 


export default function ThrashM(){
  return (
    <View style={estilo.container}>
    <ScrollView>
        <Text style={estilo.titulo}>O thrash metal</Text>

        <Text style={estilo.conceito}>
        Thrash metal é um subgênero do heavy metal caracterizado por seu ritmo rápido e agressividade. As canções usualmente têm batidas rápidas e riffs de guitarra que regem a música, intercalados com solos ao estilo shred.
        </Text>

        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/thrash.png')}/>

        <Text style={estilo.subtitulo}><MaterialCommunityIcons name="playlist-music" size={24} color="white" /> Bandas: </Text>

        <View style={estilo.fundo}>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Anthrax</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Megadeth</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Metallica</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Overkill</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Exodus</Text>

    </View>
    </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black'
  },

  titulo:{
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  subtitulo:{
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white'
  },

  conceito:{
    fontSize: 18,
    textAlign:'justify',
    margin: 15,
    color: 'white'
  },

  topico:{
    fontSizse: 20,
    color: 'white'
  },

  img:{
    width: largura,
    height: 300,
    borderRadius: 10,
    marginBottom: 30
  },

  fundo:{
    backgroundColor: '#5E5655',
    borderRadius: 5,
    marginHorizontal: 20,
    padding: 10 
  }
})