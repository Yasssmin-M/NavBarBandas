import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons'; 

export default function BlackM(){
  return (
    <ScrollView>
    <View style={estilo.container}>
        <Text style={estilo.titulo}>O black metal</Text>

        <Text style={estilo.conceito}>
        Black metal é uma vertente extrema e obscura do heavy metal que surgiu na década de 1980 e foi evoluindo ao longo dos anos. Suas características atuais se desenvolveram no início da década de 1990, principalmente na Noruega e em outros países como Suécia e Finlândia.
        </Text>

        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/black.jpg')}/>

        <Text style={estilo.subtitulo}><MaterialCommunityIcons name="playlist-music" size={24} color="white" /> Bandas: </Text>

        <View style={estilo.fundo}>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Dimmu borgir</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Black sabbath</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Sepultura</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Gorgoroth</Text>
        <Text style={estilo.topico}><Entypo name="arrow-long-right" size={18} color="black" /> Immortal</Text>

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
    fontSizse: 20,
    padding: 10 
  }
})
