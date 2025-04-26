import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    emptycontainer:{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingVertical: 48,
        paddingHorizontal: 20,
        borderTopColor: '#808080',
        borderEndColor: '#1A1A1A',
        borderStartColor: '#1A1A1A',
        borderBottomColor: '#1A1A1A',
        borderWidth: 1
    },
    image:{
        marginBottom: 16,
        justifyContent: 'center'
    },
    TextTitle:{
        fontWeight: 'bold',
        color: '#808080',
        fontSize: 14
    },
    TextSubTitle:{
        fontWeight: 'regular',
        color: '#808080',
        fontSize: 12
    }
})