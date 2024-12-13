export interface Grupo {
    name:     string;
    lastDate: string;
    values:   Value[];
}

export interface Value {
    name:  string;
    state: boolean;
}

// Necesito tener una lista con todos los grupos 
// para el contexto...
export interface RiegoContextType { 
    grupos: Grupo[]; 
    updateGrupo: (updatedGroup: Grupo) => void; 
}