import ExpensesScreenCard from "@/components/ExpensesScreenCard";
import ExpensesStatusTabs from "@/components/ExpenseStatusTabs";
import { fonts } from "@/constants/fonts";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MagnifingGlass from "../../../assets/images/magnifingGlass.svg";
import { styles } from "./styles";


export default function Reports({}) {

    return(
        <SafeAreaView style={styles.container}>
          
                <StatusBar
                    backgroundColor="#E56425"
                    barStyle="dark-content"
                    translucent={false}
                />
                <View style={styles.header}>
                    <View style={{alignItems:"center", flex:1}}>
                        <Text style={{fontSize:20, fontFamily:fonts.regular, }}>
                            Minhas Despesas
                        </Text>
                    </View>
                    <MagnifingGlass/>
                </View>
                <View
                    style={{backgroundColor:'#E1E1E1', height:1, width:"100%", }}
                />

                <View style={{}}>
                    <ExpensesStatusTabs/>
                </View>

                <View style={styles.expensesCardView}>
                    <ExpensesScreenCard/>
                </View>

            </SafeAreaView>
    )
}