import React from 'react';
import { usePrice } from '../../Hooks';

const Price: React.FC<{pokemon: string, type: string}> = ({pokemon, type}) => {
  console.log("usePrice", pokemon);
  const [price, listPrice] = usePrice(pokemon)

  return (
    <div className={type}>
      <span className={`${type}--listprice`}>From {listPrice}</span>
      <strong className={`${type}`}>For {price}</strong>
    </div> 
  )
}

export default Price;