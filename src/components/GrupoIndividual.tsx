import React from "react";
import { Surface, Text } from 'react-native-paper';
import { Grupo } from '../InterfazRiego'
import Valvula from '../components/Valvula'

interface GrupoIndividualProps {
  grupo: Grupo;
  onUpdate: (updatedGrupo: Grupo) => void;
}

const GrupoIndividual = ({ grupo, onUpdate }: GrupoIndividualProps) => {
  const deslizar = (nameValvula: string) => {
    const estado = grupo.values.map((value) =>
      value.name == nameValvula ? { ...value, state: !value.state } : value
    // Cada Valvula tiene un key name
    // Saca todas las Valvulas del grupo (con grupo.values.map((value)) y las recorre
    // ¿Coincide con el nombre de la Válvula deslizada? Opuesto
    // ¿No? Sigue como estaban (value)
    );

    const updatedGrupo = { ...grupo, values: estado };
    onUpdate(updatedGrupo);
  };

  return (
    // Separar grupos con surface?
    <Surface elevation={4}>
      <Text>{grupo.name}</Text> 
      {grupo.values.map((value) => (
        // Recorre mapa, crea Valvula, le da valores correspondientes...
        <Valvula key={value.name} value={value} onToggleSwitch={deslizar} />
      ))}
    </Surface>
  );
};

export default GrupoIndividual;