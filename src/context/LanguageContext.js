import React, {useState} from "react";


// si un componente o un objeto no tienen acceso al proveedor
// por defecto se accede al contexto estático
const Context = React.createContext({})
// el consumidor es el mismo
// el provider es envolver al provider con un valor custom
export function LanguageContextProvider({children}) {
  const [language, setLanguage] = useState(0)
  return <Context.Provider value={{language, setLanguage}}>
    {children}
  </Context.Provider>
}

export default Context