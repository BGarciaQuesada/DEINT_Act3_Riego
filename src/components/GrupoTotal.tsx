import React from "react";
import { FlatList, View, Text } from "react-native";
import { regar } from "../contexto";
import { Grupo } from "../config/entities/InterfazRiego";
import GrupoIndividual from "./GrupoIndividual";

const GrupoTotal = () => {
  const { grupos, updateGrupo } = regar();

  if (grupos.length == 0) {
    // Si es 0 es que no ha cargado... Esperar
    return (
      <View>
        <Text>Cargando</Text>
      </View>
    );
  }

  // Re-renderizar los grupos actualizados
  return (
    <FlatList
      data={grupos} 
      keyExtractor={(item) => item.name} 
      renderItem={({ item }: { item: Grupo }) => (
        <GrupoIndividual grupo={item} onUpdate={updateGrupo} />
      )}
    />
  );
};

export default GrupoTotal;
