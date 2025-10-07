import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
      // paddingHorizontal:20
      
    },
    tabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 12,
    },
    tab: {
      fontFamily: fonts.medium,
      color: '#999',
    },
    tabSelected: {
      color: colors.orange,
      borderBottomWidth: 2,
      borderBottomColor: colors.orange,
      paddingBottom: 4,
    },
    filters: {
      fontFamily: fonts.regular,
      color: '#666',
      fontSize: 13,
      marginBottom: 8,
    },
    bold: { fontFamily: fonts.medium },
    chartContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: 20,
    },
    centerText: {
      position: 'absolute',
      alignItems: 'center',
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
    categoryRow: {
      marginBottom: 10,
    },
    categoryText: {
      fontFamily: fonts.medium,
      color: '#444',
    },
    barContainer: {
      height: 10,
      backgroundColor: '#EEE',
      borderRadius: 5,
      overflow: 'hidden',
      marginVertical: 4,
    },
    barFill: {
      height: '100%',
      borderRadius: 5,
    },
    barValue: {
      position: 'absolute',
      right: 8,
      top: -2,
      fontSize: 12,
      color: '#444',
    },
  });