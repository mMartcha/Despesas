// ExpensesScreenCard.tsx
import { fonts } from "@/constants/fonts";
import React from "react";
import { Text, View } from "react-native";
import { SvgProps } from "react-native-svg";
import StatusText from "../StatusText";
import { styles } from "./styles";

import AccommodationSvg from "../../assets/images/categoryIcons/accommodation.svg";
import CarSvg from "../../assets/images/categoryIcons/car.svg";
import DollarSvg from "../../assets/images/categoryIcons/dollar.svg";
import FoodSvg from "../../assets/images/categoryIcons/food.svg";
import FuelSvg from "../../assets/images/categoryIcons/fuel.svg";
import ReceiptSvg from "../../assets/images/categoryIcons/receipt.svg";
import TicketSvg from "../../assets/images/categoryIcons/ticket.svg";

const STATUS_COLORS = {
    blue: { backgroundColor: "#006FB20D", textColor: "#006FB2" },
    red: { backgroundColor: "#EE01010D", textColor: "#EE0101" },
    green: { backgroundColor: "#00B2270D", textColor: "#00B227" },
} as const;

type StatusKey = keyof typeof STATUS_COLORS;


type IconName =
  | "car"
  | "food"
  | "fuel"
  | "accommodation"
  | "dollar"
  | "receipt"
  | "ticket";

const iconsMap: Record<IconName, React.ComponentType<SvgProps>> = {
  car: CarSvg,
  food: FoodSvg,
  fuel: FuelSvg,
  accommodation: AccommodationSvg,
  dollar: DollarSvg,
  receipt: ReceiptSvg,
  ticket: TicketSvg,
};

type Props = {
  expenseTitle: string;
  expenseText?: string;
  iconName: IconName;
  status: StatusKey;
  statusText: string;
};

export default function ExpensesScreenCard({
  iconName,
  status,
  statusText,
  expenseText,
  expenseTitle,
}: Props) {

  const palette = STATUS_COLORS[status] ?? STATUS_COLORS.blue;
  const IconComponent = iconsMap[iconName] ?? ReceiptSvg;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "flex-end", paddingRight: 8 }}>
          <StatusText
            statusTitle={statusText}
            statusBackgroundColor={palette.backgroundColor}
            statusTextColor={palette.textColor}
          />
        </View>

        <View style={{ flexDirection: "row", paddingLeft: 12 }}>

          <View style={{ justifyContent: "center", height: 35, paddingRight: 12 }}>
            <IconComponent width={22} height={22} />
          </View>

          <View style={{ flex: 1, minWidth: 0, paddingRight: 20 }}>

            <Text style={{ fontSize: 16, fontFamily: fonts.semibold }}>
              {expenseTitle}
            </Text>
            
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.regular,
                flexShrink: 1,
                flexWrap: "wrap",
                lineHeight: 20,
              }}
            >
              {expenseText}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
