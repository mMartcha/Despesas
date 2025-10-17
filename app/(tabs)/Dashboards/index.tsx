import DashboardPanel from "@/components/BigViews/DashboardPanel";
import { fonts } from "@/constants/fonts";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Dashboards() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={{fontSize:20, fontFamily:fonts.medium}}>Dashboards</Text>
      </View>

      <View style={styles.bodyView}>
        <View style={styles.filterView}>
        </View>

        <View style={styles.lowerBodyView}>
          <DashboardPanel /> 
        </View>
      </View>
    </View>
  );
}
