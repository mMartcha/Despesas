import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
    label:string,
    percent: number,
    color: string,
}

export default function CategoryBar({label, percent, color,}:Props) {
  return (
    <View style={{flexDirection:'row', height:20, marginBottom:8}}>
      
      <View style={{flex:1}}>
        <Text style={styles.label}>{label}</Text>
      </View>
      
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent}%`, backgroundColor: color, alignItems:'center', justifyContent:'flex-end' }]} >
          <Text style={styles.value}>{percent}%</Text>
        </View>
      </View>
    </View>
  );
}