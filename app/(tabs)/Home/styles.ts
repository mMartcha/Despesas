import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    headerView:{
        backgroundColor:'#fff',
        height:210
    },
    bodyView:{
        flex:1,
        backgroundColor:'#fff',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        bottom:20,
        paddingTop:20
        
        
    },
    filterView:{
        flexDirection:'row',
        justifyContent:"center"
    },
    lowerBodyView:{
        paddingTop:20,
        paddingHorizontal:30
    }
})