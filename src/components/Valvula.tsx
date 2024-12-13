import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-paper';
import { Value } from '../InterfazRiego';

interface ValvulaProps {
  value: Value;
  onToggleSwitch: (name: string) => void;
}

const Valvula = ({ value, onToggleSwitch }: ValvulaProps) => {
  return (
    <View>
      <Text>{value.name}</Text>
      <Switch
        value={value.state}
        onValueChange={() => onToggleSwitch(value.name)}
      />
    </View>
  );
};

export default Valvula;