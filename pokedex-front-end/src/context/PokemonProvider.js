import { PokemonContext } from "./PokemonContext";

//Logica para la aplicacion
export const PokemonProvider = ({children})  =>
    {
  return (
    <PokemonContext.Provider value={{
        numero:0
    }}>
        {children}
    </PokemonContext.Provider>    
  )
};
