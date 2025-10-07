import CategoryBar from "@/components/CategoryBars";
import Donut from "@/components/Donut";
import React, { useMemo } from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Category = { name: string; percent: number; color: string };

export default function DashboardPanel() {

  const categories: Category[] = [
    { name: "Hospedagem",  percent: 14, color: "#7B2D00" },
    { name: "Alimentação", percent: 25, color: "#F26B1D" },
    { name: "Transporte",  percent: 18, color: "#F6A57E" },
    { name: "Outros",      percent: 44, color: "#F4C7B1" },
  ];
  const total = 1432.0;

  const slices = useMemo(() =>
      categories.map((c) => ({ label: c.name, value: c.percent, color: c.color })),
    [categories]
  );

  const totalBRL = useMemo(
    () => `R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
    [total]
  );

  return (
    <View style={styles.container}>
      <Donut
        slices={slices}
        totalLabel="Gasto diário:"
        totalValue={totalBRL}
        size={250}        
        thickness={26}    
      />

      <View style={{ marginTop: 16 }}>
        {categories.map((c) => (
          <CategoryBar
            key={c.name}
            label={c.name}
            percent={c.percent}
            color={"#E56425"}
          />
        ))}
      </View>

      
    </View>
  );
}
