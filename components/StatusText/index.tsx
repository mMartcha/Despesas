import { fonts } from "@/constants/fonts";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    statusTitle: string
}

export default function StatusText({statusTitle}:Props) {
    return(
        <View style={styles.container}>
            <Text style={{fontFamily:fonts.semibold, fontSize:10, color: '#006FB2'}}>{statusTitle}</Text>
        </View>
    )
}