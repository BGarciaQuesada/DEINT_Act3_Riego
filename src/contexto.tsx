import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Grupo, RiegoContextType } from './config/entities/InterfazRiego';

export const RiegoContext = createContext<RiegoContextType>({
  grupos: [],
  updateGrupo: () => { },
});

export const RiegoProvider = ({ children }: { children: React.ReactNode }) => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);


  useEffect(() => {
    // Conseguir objetos del servidor
    const fetchItems = async () => {
      try {
        const response = await axios.get<Grupo[]>('http://localhost:3000/items');
        setGrupos(response.data);
        console.log('Datos obtenidos: ', response.data);
      } catch (error) {
        console.error('Error haciendo fetch:', error);
      }
    };
    fetchItems();
  }, []);
  //   ^ Se ejecuta al iniciar (paréntesis rodeando función flecha) 

  // Actualizar grupo
  const updateGrupo = async (updatedGroup: Grupo) => {
    try {
      const updatedGrupos = grupos.map((grupo) =>
        grupo.name === updatedGroup.name ? updatedGroup : grupo
      );
      setGrupos(updatedGrupos);
      await axios.post('http://localhost:3000/items', updatedGrupos);
    } catch (error) {
      console.error('Error updating items:', error);
    }
  };

  return (
    <RiegoContext.Provider value={{ grupos, updateGrupo }}>
      {children}
    </RiegoContext.Provider>
  );
};

export const regar = () => useContext(RiegoContext) as RiegoContextType;
