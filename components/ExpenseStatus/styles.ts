import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        height:35,
        borderWidth:0.5,
        borderRadius:10, 
        paddingHorizontal:20,
        justifyContent:"center",
        borderColor:'#C4C4C4'

    },
    containerSelected:{
        height:35,
        borderWidth:0.5,
        borderStyle:"dashed",
        borderRadius:10, 
        paddingHorizontal:20,
        justifyContent:"center",
        borderColor:'#E56425'

    },

    title:{
        fontSize:15,
        fontFamily:fonts.regular
    },

    titleSelected:{
        fontSize:15,
        fontFamily:fonts.medium,
        color: "#E56425"
        
        
    }

})