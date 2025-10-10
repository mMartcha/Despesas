import { Pressable, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  selected: boolean;
  onPress: () => void;
  Icon: React.FC<any>;          
  IconSelected: React.FC<any>;   
};

export default function FilterHomeButton({title,selected,onPress,Icon,IconSelected,}: Props) {
    
  const ActiveIcon = selected ? IconSelected : Icon;

  return (
    <Pressable
      style={[
        styles.container,
        selected ? styles.containerSelected : null,
      ]}
      onPress={onPress}
    >
      <ActiveIcon
        width={18}
        height={18}
        style={styles.icon}
      />
      <Text
        style={[styles.text, selected ? styles.textSelected : null]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
