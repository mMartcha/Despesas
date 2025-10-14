// ExpensesStatusTabs.tsx
import { View } from "react-native";
import ExpenseStatus from "../ExpenseStatus";
import { styles } from "./styles";

export type StatusTab = "Todos" | "Em análise" | "Recusado";

type Props = {
  value: StatusTab;
  onChange: (next: StatusTab) => void;
};

export default function ExpensesStatusTabs({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <ExpenseStatus
        statusTitle="Todos"
        onPress={() => onChange("Todos")}
        selected={value === "Todos"}
      />
      <ExpenseStatus
        statusTitle="Em análise"
        onPress={() => onChange("Em análise")}
        selected={value === "Em análise"}
      />
      <ExpenseStatus
        statusTitle="Recusado"
        onPress={() => onChange("Recusado")}
        selected={value === "Recusado"}
      />
    </View>
  );
}
