import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    label: {
        fontSize:16,
        color:'#6B6B6B',
        fontFamily: fonts.regular
    },
    track: {
        height: 20,
        backgroundColor: '#FFD8C5',
        borderRadius: 6,
        overflow: 'hidden',
        width:"60%",

        
    },
    fill: {
        height: '100%',
        flexDirection:'row'
    },
    value: {   
        position:"absolute",
        fontSize: 10,
        color: '#fff',
        fontFamily:fonts.regular,
        alignSelf:"center"
        
        

        
        
     },
  });