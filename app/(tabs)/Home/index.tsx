import DashboardPanel from "@/components/BigViews/DashboardPanel";

import HeaderHome from "@/components/HeaderHome";
import UnderHeaderHome from "@/components/UnderHeaderHome";
import { useState } from "react";
import { StatusBar, View } from "react-native";
import { styles } from "./styles";

export default function Home() {

    const [tab, setTab] = useState<"dashboard" | "envios">("dashboard");


    return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#E56425"
                barStyle="light-content"
                translucent={false}
            />

            <View style={styles.headerView}>
                <HeaderHome/>
                <UnderHeaderHome/>
            </View>

            <View style={styles.bodyView}>
                <View style={styles.filterView}>
                    
                    {/* <FilterTabs value={tab} onChange={setTab} /> */}

                </View>

                <View style={styles.lowerBodyView}>
                    {/* {tab === "dashboard" ?  : <SentPanel />} */}
                    <DashboardPanel />
                </View>

            </View>
        </View>
    )
}