import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
      paddingHorizontal:10,
    },
   
    centerLabel: {
      fontFamily: fonts.regular,
      color: '#999',
      fontSize: 13,
    },
    centerValue: {
      fontFamily: fonts.bold,
      color: '#333',
      fontSize: 20,
    },

    dateFilterView:{
      flexDirection: "row",
      gap: 8,
      marginBottom: 20,
      justifyContent:"center",
      
    },
    dateFilterButton:{
      height:30,
      width:75,
      borderRadius: 15,
      alignItems:"center",
      justifyContent:"center"
    }
   
    
    
    
    
  });