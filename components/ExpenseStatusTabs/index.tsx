import { useState } from "react";
import { View } from "react-native";
import ExpenseStatus from "../ExpenseStatus";
import { styles } from "./styles";


export type StatusTab = "Todos" | "Em analise" | "Recusado";

type Props = {
  value: StatusTab;              
};


export default function ExpensesStatusTabs() {

    const [status, setStatus] = useState<StatusTab>("Todos");

  return (
    <View style={styles.container}>
      <ExpenseStatus
        statusTitle="Todos"
        onPress={() => setStatus("Todos")}
        selected={status === "Todos"}
      />

      <ExpenseStatus
        statusTitle="Em análise"
        onPress={() => setStatus("Em analise")}
        selected={status === "Em analise"}
      />

      <ExpenseStatus
        statusTitle="Recusado"
        onPress={() => setStatus("Recusado")}
        selected={status === "Recusado"}
      />
    </View>
  );
}
