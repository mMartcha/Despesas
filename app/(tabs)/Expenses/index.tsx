import ExpensesScreenCard from "@/components/ExpensesScreenCard";
import ExpensesStatusTabs, { StatusTab } from "@/components/ExpenseStatusTabs";
import { fonts } from "@/constants/fonts";
import React, { useMemo, useState } from "react";
import { FlatList, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MagnifingGlass from "../../../assets/images/magnifingGlass.svg";
import { styles } from "./styles";

type ExpenseStatusColor = "blue" | "green" | "red";

type ExpenseItem = {
  id: string;
  statusColor: ExpenseStatusColor;
  statusText: string;
  title: string;
  text: string;
  iconName:
    | "accommodation"
    | "fuel"
    | "car"
    | "food"
    | "ticket"
    | "receipt"
    | "dollar";
};

const ALL_EXPENSES: ExpenseItem[] = [
  {
    id: "1",
    statusColor: "blue",
    statusText: "EM ANÁLISE GESTOR",
    title: "Despesas Múltiplas",
    text: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.",
    iconName: "accommodation",
  },
  {
    id: "2",
    statusColor: "green",
    statusText: "APROVADO POR GESTOR",
    title: "Abastecimento",
    text: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.",
    iconName: "fuel",
  },
  {
    id: "3",
    statusColor: "red",
    statusText: "RECUSADO",
    title: "Despesas Múltiplas",
    text: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.",
    iconName: "car",
  },
  {
    id: "4",
    statusColor: "blue",
    statusText: "EM ANÁLISE GESTOR",
    title: "Alimentação",
    text: "Despesa referente a almoço durante viagem de trabalho em Porto Alegre.",
    iconName: "food",
  },
  {
    id: "5",
    statusColor: "green",
    statusText: "APROVADO POR GESTOR",
    title: "Hospedagem - Hotel Solaris",
    text: "Reserva de duas diárias para reunião com clientes da região norte.",
    iconName: "accommodation",
  },
  {
    id: "6",
    statusColor: "blue",
    statusText: "EM ANÁLISE GESTOR",
    title: "Passagem Aérea",
    text: "Trecho de ida e volta São Paulo - Florianópolis, voo LATAM 3625.",
    iconName: "ticket",
  },
  {
    id: "7",
    statusColor: "green",
    statusText: "APROVADO POR GESTOR",
    title: "Taxi / Transporte",
    text: "Corrida de táxi entre o aeroporto e o hotel durante viagem corporativa.",
    iconName: "car",
  },
  {
    id: "8",
    statusColor: "red",
    statusText: "RECUSADO",
    title: "Reembolso Indevido",
    text: "Despesa não elegível conforme política interna de reembolso.",
    iconName: "receipt",
  },
];


export default function Expenses() {
  const [tab, setTab] = useState<StatusTab>("Todos");

  const filteredExpenses = useMemo(() => {
    if (tab === "Todos") return ALL_EXPENSES;
    if (tab === "Em análise") return ALL_EXPENSES.filter((e) => e.statusColor === "blue");
    if (tab === "Recusado") return ALL_EXPENSES.filter((e) => e.statusColor === "red");
    return ALL_EXPENSES;
  }, [tab]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#E56425"
        barStyle="dark-content"
        translucent={false}
      />

      <View style={styles.header}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontSize: 20, fontFamily: fonts.regular }}>
            Minhas Despesas
          </Text>
        </View>
        <MagnifingGlass />
      </View>

      <View
        style={{
          backgroundColor: "#E1E1E1",
          height: 1,
          width: "100%",
        }}
      />

      <View style={{ marginTop: 10 }}>
        <ExpensesStatusTabs value={tab} onChange={setTab} />
      </View>

      <FlatList
      data={filteredExpenses}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 20,
        paddingHorizontal: 0,
      }}
      renderItem={({ item }) => (
        <View style={styles.expensesCardView}>
          <ExpensesScreenCard
            status={item.statusColor}
            statusText={item.statusText}
            expenseTitle={item.title}
            expenseText={item.text}
            iconName={item.iconName}
          />
        </View>
      )}
    />
    </SafeAreaView>
  );
}
