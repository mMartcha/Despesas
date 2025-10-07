import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    center: {
        position: 'absolute',
        top: '35%', left: 0,
        right: 0,
        alignItems: 'center'
     },
    centerLabel: {
        fontSize: 14,
        fontFamily: fonts.regular,
        color: '#6B6B6B'
    },
    centerValue: {
        fontSize: 20,
        fontFamily: fonts.semibold,
        color: '#6B6B6B'
    },
})