import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        width:'95%',
        backgroundColor:'#3333',
        left: 10,
        height: 70,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginVertical: 4,
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    textContainer:{
      width: '60%',
      height: 40,
      alignContent: 'center',
      justifyContent: 'center',
      marginHorizontal: 8,
    },
    textDone:{
      fontSize: 16,
      color: '#fff',
      textDecorationLine: 'line-through'
    },
    textCreated:{
      fontSize: 16,
      color: '#fff',
      textDecorationLine: 'none'
    }
      })