import react, { View, Image, Text } from 'react-native'
import { styles } from './styles'
import React from 'react'
import ClipBoard from '../../img/Clipboard.png'

export function Empty() {
    return (
        <View style={styles.emptycontainer}>
            <Image source={ClipBoard} style={styles.image}></Image>
            <Text style={styles.TextTitle}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.TextSubTitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}