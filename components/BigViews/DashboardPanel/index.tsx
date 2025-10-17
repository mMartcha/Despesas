import CategoryBar from "@/components/CategoryBars";
import DashboardScreenDetail from "@/components/DashboardScreenDetail";
import Donut from "@/components/Donut";
import { fonts } from "@/constants/fonts";
import { mockDashboard } from "@/services/mock";
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

type Period = "day" | "week" | "month" | "year";
type Category = { label: string; percent: number; color: string; value: number };

const PERIOD_LABEL: Record<Period, string> = {
  day: "Dia:",
  week: "Semana:",
  month: "Mês:",
  year: "Ano:",
};

const DETAIL_TITLE: Record<Period, string> = {
  day: "Detalhamento de Gastos",
  week: "Gastos semanais",
  month: "Gastos mensais",
  year: "Detalhamento de Gastos",
};

export default function DashboardPanel() {
  const [period, setPeriod] = useState<Period>("day");
  const data = mockDashboard[period];

  const categories: Category[] = useMemo(
    () =>
      data.categories.map((c: any) => ({
        label: c.label,
        percent: c.percent,
        color: c.color,
        value: c.value,
      })),
    [data]
  );

  const slices = useMemo(
    () =>
      categories.map((c) => ({
        label: c.label,
        value: c.percent,
        color: c.color,
      })),
    [categories]
  );

  const totalBRL = useMemo(
    () =>
      `R$ ${data.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
    [data.total]
  );

  const showValueBRL = period === "week" || period === "month";

  return (
    <View style={styles.container}>
      <View style={styles.dateFilterView}>
        {(
          [
            { key: "day", label: "Dia" },
            { key: "week", label: "Semana" },
            { key: "month", label: "Mês" },
            { key: "year", label: "Ano" },
          ] as { key: Period; label: string }[]
        ).map((opt) => {
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
              <Text style={{ color: active ? "#E56425" : "#C8C7CA" }}>
                {opt.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={{ backgroundColor: "#E1E1E1", height: 1, width: "100%" }} />

      <ScrollView
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 140,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingLeft: 20, paddingBottom: 30 }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.medium,
              color: "#8E8E93",
            }}
          >
            Filtros:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                position: "absolute",
                fontSize: 14,
                fontFamily: fonts.regular,
                color: "#8E8E93",
              }}
            >
              Centro de custo:0000
            </Text>
            <Text
              style={{
                position: "absolute",
                left: 160,
                fontSize: 14,
                fontFamily: fonts.regular,
                color: "#8E8E93",
              }}
            >
              Categorias:Todas
            </Text>
          </View>
        </View>

        {(period === "day" || period === "year") && (
          <Donut
            slices={slices}
            totalLabel={PERIOD_LABEL[period]}
            totalValue={totalBRL}
            size={250}
            thickness={20}
          />
        )}

        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <DashboardScreenDetail text={DETAIL_TITLE[period]} />

          <View style={{ marginTop: 16 }}>
            {categories.map((c) => {
              const valueText = `R$ ${c.value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}`;

              return showValueBRL ? (
                <CategoryBar
  key={c.label}
  label={c.label}
  percent={c.percent}
  color={c.color}
  valueBRL={showValueBRL ? `R$ ${c.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : undefined}
  period={period} // << ADICIONA ESTA LINHA
/>
              ) : (
                <CategoryBar
                  key={c.label}
                  label={c.label}
                  percent={c.percent}
                  color={c.color}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
