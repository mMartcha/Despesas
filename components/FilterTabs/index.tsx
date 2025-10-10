// components/FilterTabs/index.tsx
import FilterHomeButton from "@/components/FilterHomeButton";
import React from "react";
import { View } from "react-native";

import Graph from "@/assets/images/graphFilter.svg";
import GraphSelected from "@/assets/images/graphSelectedFilter.svg";
import Receipt from "@/assets/images/receiptFilter.svg";
import ReceiptSelected from "@/assets/images/receiptSelectedFilter.svg";
import { styles } from "./styles";

export type HomeTab = "dashboard" | "envios";

type Props = {
  value: HomeTab;              
  onChange: (v: HomeTab) => void; 
};

export default function FilterTabs({ value, onChange }: Props) {
  return (
    <View style={styles.row}>
      <FilterHomeButton
        title="Dashboard"
        selected={value === "dashboard"}
        onPress={() => onChange("dashboard")}
        Icon={Graph}
        IconSelected={GraphSelected}
      />
      <FilterHomeButton
        title="Envios"
        selected={value === "envios"}
        onPress={() => onChange("envios")}
        Icon={Receipt}
        IconSelected={ReceiptSelected}
      />
    </View>
  );
}


