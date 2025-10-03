import SentExpenseCard from "@/components/SentExpenseCard";
import { View } from "react-native";
import { styles } from "./styles";

export default function SentPanel() {
    return(
        <View style={styles.container}>
            <SentExpenseCard/>
        </View>
    )
}