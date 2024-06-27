import React, {useState} from "react"


function Item({ name, category }) {
    const [isInCart, setIsInCart] = useState(false)
    
    function handleClick() {
      setIsInCart(!isInCart)
    }


  return ( 
    <li className= {isInCart ? 'in-cart' : 'not in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick= {handleClick}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
