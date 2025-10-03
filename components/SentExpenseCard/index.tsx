import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { Pressable, Text, View } from "react-native";
import Receipt from "../../assets/images/Receipt.svg";
import { styles } from "./styles";

export default function SentExpenseCard() {
    return(
        <Pressable style={styles.container}>

            <Receipt/>

            <View style={styles.titleView}>
                <Text style={{fontFamily: fonts.semibold, fontSize:16}}>Hospedagem</Text>
                <Text style={{fontFamily: fonts.regular, fontSize:14}}>Hotel ibis</Text>
            </View>

            <View style={styles.specsView}>
                <Text style={{fontFamily: fonts.semibold, fontSize:18}}>R$ 387,15</Text>
                <Text style={{fontSize:13, color: "#6B6B6B",  fontFamily:fonts.regular}}>25/01/2024</Text>
                <Text style={{fontSize:13,  fontFamily:fonts.medium}}>Despesa Unitaria</Text>
                <Text style={{fontSize:14, color: colors.orange, fontFamily:fonts.medium}}>Centro de Custo</Text>
            </View>
            
        </Pressable>
    )
}