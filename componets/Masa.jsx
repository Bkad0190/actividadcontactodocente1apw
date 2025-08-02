import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web'

export default function Masa() {
    const [peso,setpeso] = useState(0)
    const [altura,setaltura] = useState(0)

    function calcular(){
        let IMC = peso/(altura*altura)
        if (IMC<18.5){
        Alert.alert ("Peso insuficiente")
        }else if (IMC>=25){
            Alert.alert ("Tiene sobrepeso")
        }else{
            Alert.alert ("Peso adecuado")
        }

        }
    }

  return (
    <View>
      <Text style= {{fontSize:60}}>Masa Corporal</Text>
    <TextInput
    placeholder='Ingresar peso'
    style={styles.input}
    onChangeText={(texto)=>setpeso(texto)}
    />
    <TextInput
    placeholder='Ingresar altura'
    style={styles.input}
    keyboardType='numeric'
    onChangeText={(texto)=> setaltura (texto)}
    />

    <TouchableOpacity onPress={()=> calcular ()}> 
    <Text>Calcular</Text>
    </TouchableOpacity>

    </View>
  )


const styles = StyleSheet.create({
input:{
    fonSize:40,
    backgroundColor:"#aecaea",
    margin:2,
    borderRadius:20,
    paddingHorizontal:20

}

})