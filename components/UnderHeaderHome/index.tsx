import { fonts } from "@/constants/fonts";
import { Text, View } from "react-native";
import HomeSvg from "../../assets/images/home.svg";
import ReportSvg from "../../assets/images/Reportsvg.svg";
import { styles } from "./styles";
export default function UnderHeaderHome() {
    return(
        <View style={styles.container}>

            <View style={styles.home}>
                <HomeSvg/>
            </View>

            <View style={styles.newReport}>
                <ReportSvg/>
                <Text style={{color:'#fff', fontFamily:fonts.semibold}}>Nova Despesa</Text>
            </View>
        </View>
    )
}