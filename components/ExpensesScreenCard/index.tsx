import { fonts } from "@/constants/fonts";
import { Text, View } from "react-native";
import Icon from "../../assets/images/categoryIcons/accommodation.svg";
import StatusText from "../StatusText";
import { styles } from "./styles";
export default function ExpensesScreenCard() {
    return(
        <View style={styles.container}>
            <View style={{justifyContent:"center", backgroundColor:'green', height:35}}>
                <Icon/>
            </View>

            <View style={{ backgroundColor:'orange' }}>
                <View style={{backgroundColor:'red',height:22, alignItems:"flex-end"}}>
                    <StatusText
                        statusTitle="EM ANALISE GESTOR"
                    />
                </View>

                <View>
                    <Text style={{fontSize:16, fontFamily:fonts.semibold}}>Despesas Multiplas</Text>
                    <Text style={{fontSize:14, fontFamily:fonts.regular}}>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressãos .</Text>
                </View>
            </View>
            

        </View>
    )
}