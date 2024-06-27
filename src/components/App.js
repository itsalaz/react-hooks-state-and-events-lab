import React, {useState} from "react"
import ShoppingList from "./ShoppingList"
import itemData from "../data/items"

function App() {
  const [isdarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isdarkMode)
  }

  const appClass = false ? "App dark" : "App light"

  return (
    <div className= {appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
