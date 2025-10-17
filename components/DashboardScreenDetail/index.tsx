import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props ={
    text: string
}


export default function DashboardScreenDetail({text}:Props) {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:13, fontFamily:fonts.medium, color:colors.orange}}>
                {text}
            </Text>
        </View>
    )
}