import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.orange,
        minHeight:90,
        flexDirection:'row',
        paddingHorizontal:20,
        gap:12
    },
    home:{
        height:50,
        width:50,
        borderRadius:15,
        borderColor:'#fff',
        borderWidth:0.5,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        alignItems:"center",
        justifyContent:"center"

    },
    newReport:{
        height:50,
        borderRadius:15,
        borderColor:"#fff",
        borderWidth:0.5,
        borderStyle:"dashed",
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        gap:8,
        backgroundColor: "rgba(255, 255, 255, 0.15)",

    }
})