import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { RiegoProvider } from "./src/contexto";
import GrupoTotal from "./src/components/GrupoTotal";


const App = () => {
  return (
    <RiegoProvider>
      <SafeAreaView>
        <GrupoTotal/>
      </SafeAreaView>
    </RiegoProvider>
  );
};

export default App;
