import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.orange,
        minHeight:120,
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:"center"

    },
    profileCircle:{
        height: 50,
        width:50,
        borderRadius:100,
        backgroundColor:colors.profileCircle,
        alignItems:"center",
        justifyContent:"center",
        marginRight:12,
    },
    headerTitle:{
        flex:1
    },
    headerSettings:{
        height:50,
        width:50,
        borderRadius:15,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#fff",
        borderWidth:0.5
        
    }
})