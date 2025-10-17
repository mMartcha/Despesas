import { fonts } from "@/constants/fonts";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  percent: number; // define largura e exibe percentual quando não há valueBRL
  color: string;
  valueBRL?: string; // define se exibe R$ ou %
  period?: "day" | "week" | "month" | "year"; // ajuda a decidir estilo do texto
};

export default function CategoryBar({
  label,
  percent,
  color,
  valueBRL,
  period,
}: Props) {
  const pct = Math.min(Math.max(percent ?? 0, 0), 100);

  // define estilo de texto conforme o período
  const textStyle =
    period === "day" || period === "year"
      ? {
          fontSize: 10,
          color: "#FFFFFFE5",
          fontFamily: fonts.regular,
        }
      : {
          fontSize: 12,
          color: "#FFFFFFE5",
          fontFamily: fonts.semibold,
        };

  return (
    <View style={{ flexDirection: "row", height: 20, marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
      </View>

      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            { width: `${pct}%`, backgroundColor: color, justifyContent: "center" },
          ]}
        >
          <Text
            style={[
              textStyle,
              { paddingHorizontal: 6 },
            ]}
          >
            {valueBRL ? valueBRL : `${pct.toFixed(0)}%`}
          </Text>
        </View>
      </View>
    </View>
  );
}
