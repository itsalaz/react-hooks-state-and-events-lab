import React, {useState} from "react"
import ShoppingList from "./ShoppingList"
import itemData from "../data/items"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode) 
  }

  return (
    <div className= {"App" + (isDarkMode ? "light" : "dark")}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={toggleDarkMode}>
          {isDarkMode ? "light" : "dark"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
