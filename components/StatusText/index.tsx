import { fonts } from "@/constants/fonts";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    statusTitle: string
    statusBackgroundColor: string
    statusTextColor: string
}

export default function StatusText({statusTitle, statusBackgroundColor, statusTextColor}:Props) {
    return(
        <View style={[styles.container, {backgroundColor: statusBackgroundColor}]}>
            <Text style={{fontFamily:fonts.semibold, fontSize:10, color: statusTextColor}}>{statusTitle}</Text>
        </View>
    )
}