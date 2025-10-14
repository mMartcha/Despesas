import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        // paddingTop:16
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
        paddingHorizontal:20, 
        paddingBottom:12 
    },
    expensesCardView:{
        paddingHorizontal:20,
        paddingTop:12,
        gap:10
    }
})       