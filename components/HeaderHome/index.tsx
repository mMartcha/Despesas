import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SettingsSvg from "../../assets/images/headerSettings.svg";
import { styles } from "./styles";
export default function HeaderHome() {

      const insets = useSafeAreaInsets();

    return(
        <View style={[styles.container, {paddingTop: insets.top }]}>
            <View style={styles.profileCircle}>
                <Text style={{fontSize:16, color:colors.orange}}>NP</Text>
            </View>

            <View style={styles.headerTitle}>
                <Text style={{color:'#fff', fontFamily:fonts.regular, fontSize:14}}>
                    Olá,
                </Text>
                <Text style={{color:'#fff', fontFamily: fonts.medium, fontSize:18}}>
                    Nome da Pessoa
                </Text>
            </View>

            <View style={styles.headerSettings}>
                <SettingsSvg/>
            </View>
            
        </View>
    )
}