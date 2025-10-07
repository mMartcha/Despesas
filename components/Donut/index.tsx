import { Text, View } from "react-native";
import { VictoryPie } from 'victory-native';
import { styles } from "./styles";


type Slice = {
    label: string,
    value: number,
    color: string
}

interface DonutProps {
    slices: Slice[];
    totalLabel: string;   // "Gasto diário:"
    totalValue: string;   // "R$ 1.432,00"
    size?: number;        // 220 por padrão
    thickness?: number;   // 26 por padrão
  }

export default function Donut({slices,totalLabel,totalValue,size = 220, thickness = 26}:DonutProps) {

    const innerRadius = size/2 - thickness

    return (
        <View style={{ width: size, height: size, alignSelf: 'center' }}>
          <VictoryPie
            width={size}
            height={size}
            data={slices.map(s => ({ x: s.label, y: s.value }))}
            colorScale={slices.map(s => s.color)}
            innerRadius={innerRadius}
            padAngle={2}
            labels={() => ''}           // sem rótulos
            animate={{ duration: 600 }}
          />
          <View style={styles.center}>
            <Text style={styles.centerLabel}>{totalLabel}</Text>
            <Text style={styles.centerValue}>{totalValue}</Text>
          </View>
        </View>
      );
}