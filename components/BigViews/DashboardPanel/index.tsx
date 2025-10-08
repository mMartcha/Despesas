import CategoryBar from "@/components/CategoryBars";
import Donut from "@/components/Donut";
import { mockDashboard } from "@/services/mock";
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

type Period = "day" | "week" | "month" | "year";
type Category = { label: string; percent: number; color: string };

const PERIOD_LABEL: Record<Period, string> = {
  day: "Dia:",
  week: "Semana:",
  month: "Mês:",
  year: "Ano:",
};

export default function DashboardPanel() {
  const [period, setPeriod] = useState<Period>("day");
  const data = mockDashboard[period];

  const categories: Category[] = useMemo(
    () => data.categories.map(c => ({ label: c.label, percent: c.percent, color: c.color })),
    [data]
  );

  const slices = useMemo(
    () => categories.map(c => ({ label: c.label, value: c.percent, color: c.color })),
    [categories]
  );

  const totalBRL = useMemo(
    () => `R$ ${data.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
    [data.total]
  );

  // opcional: espessura dinâmica se houver fatia dominante
  const maxPercent = Math.max(...categories.map(c => c.percent));
  const thickness = maxPercent > 25 ? 30 : 26;

  return (
    <View style={[styles.container, { flex: 1 }]}>
      {/* Cabeçalho fixo */}
      <View style={styles.dateFilterView}>
        {([
          { key: "day", label: "Dia" },
          { key: "week", label: "Semana" },
          { key: "month", label: "Mês" },
          { key: "year", label: "Ano" },
        ] as { key: Period; label: string }[]).map((opt) => {
          const active = period === opt.key;
          return (
            <Pressable
              key={opt.key}
              onPress={() => setPeriod(opt.key)}
              style={[
                styles.dateFilterButton,
                { backgroundColor: active ? "#E564251A" : "#fff" },
              ]}
            >
              <Text style={{ color: active ? "#E56425" : "#C8C7CA" }}>{opt.label}</Text>
            </Pressable>
          );
        })}
      </View>

      <Text>Filtro:</Text>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: 8,
          paddingBottom: 24,
          alignItems: "center", // centraliza o Donut
        }}
        showsVerticalScrollIndicator={false}
      >
        <Donut
          slices={slices}
          totalLabel={PERIOD_LABEL[period]}
          totalValue={totalBRL}
          size={250}
          thickness={thickness}
        />

        <View style={{ marginTop: 16, width: "100%" }}>
          {categories.map((c) => (
            <CategoryBar key={c.label} label={c.label} percent={c.percent} color={c.color} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
