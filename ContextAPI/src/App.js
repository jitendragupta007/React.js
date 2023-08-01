
import './App.css';
import { useState, createContext } from "react"
import CompA from './components/CompA';



const AppState = createContext();
const NameContext = createContext();
function App() {
  

const [data, setData] = useState("Jeet")
const [name, setName]  = useState({name:"Angie", age: "28"})

  return (
    <div className="App">
     
     <AppState.Provider value={{data,name}}>
     <NameContext.Provider value={name}>
    <h2>Context API</h2>
    <CompA />
    </NameContext.Provider>
    </AppState.Provider>
    </div>
  );
}

export default App;
export { AppState }
export { NameContext }

// or export {Appstate, NameContext}
