import { createContext ,useContext, useState} from "react";

export const Context = createContext();

const Provider = ({children}) => {
    const [textArray, setTextArray] = useState([]);

 

    return (
        <Context.Provider value={{textArray,setTextArray}}>
            {children}
        </Context.Provider>
    )

}
export const useAuth = () => useContext(Context);

export default Provider 