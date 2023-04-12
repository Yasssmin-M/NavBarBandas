import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons'; 

export default function DeathM(){
  return (
    <ScrollView>
    <View style={estilo.container}>
        <Text style={estilo.titulo}>O death metal</Text>

        <Text style={estilo.conceito}>
        Death metal é um subgênero do heavy metal. Tipicamente agrega guitarras com baixas afinações e muito distorcidas, tocadas com técnicas como palm muting e tremolo picking, vocais guturais, bateria tocada de maneira potente, uso de pedal duplo ou técnica de blast beat, alguns teclados ou atonalidade, ritmo rápido e mudanças abruptas de tempo. As letras das músicas de death metal podem abordar temas como a violência de filmes slasher, religião, satanismo, ocultismo, histórias de terror de Lovecraft, natureza, misticismo, mitologia, filosofia, ficção científica e política.
        </Text>

        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/death.png')}/>

        <Text style={estilo.subtitulo}><MaterialCommunityIcons name="playlist-music" size={24} color="white" /> Bandas: </Text>

        <View style={estilo.fundo}>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={20} color="black" /> Death</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={20} color="black" /> Slayer</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={20} color="black" /> Cannibal corpse</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={20} color="black" /> Dark Funeral</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={20} color="black" /> Dying Fetus</Text>

    </View>
    </View>
    </ScrollView>
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
    padding: 10,
  }
})