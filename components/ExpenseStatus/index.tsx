import { Pressable, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  statusTitle: string;
  selected: boolean;
  onPress: () => void;
};

export default function ExpenseStatus({ statusTitle, onPress, selected }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, selected && styles.containerSelected]}
    >
      <Text style={[styles.title, selected && styles.titleSelected]}>
        {statusTitle}
      </Text>
    </Pressable>
  );
}
