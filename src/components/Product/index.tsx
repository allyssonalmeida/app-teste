import { useState } from 'react';
import Price from '../Price';

import type { Pokemon } from '../../types/pokemon';
import { Link } from 'react-router-dom';

import './index.scss';




const Product: React.FC<Pokemon> = (props) => {
  const [activeImg, setActiveImg] = useState(props.sprites.front_default);

  return (
    <div className="shelf-product">
      <Link to={`/pokemon/${props.id}`}>
        <div className="shelf-product__image">
          <img src={activeImg} alt={props.name} />
        </div>
      </Link>
      <div className="shelf-product__badges">
        {props.types.map(type => (
          <span className={`type type--${type.name}`}>{type.name}</span>
        ))}
      </div>
      <div className="shelf-product__content">
        <div className="shelf-product__variation">
          <button onClick={()=>{setActiveImg(props.sprites.front_default)}}>
            Normal
          </button>
          <button onClick={()=>{setActiveImg(props.sprites.front_shiny)}}>
            Shiny
          </button>
        </div>
        <div className="shelf-product__title">
          {props.name}
        </div>
        <Price pokemon={props.name} type="shelf-product__price"/>
        <Link to={`/pokemon/${props.id}`} className="shelf-product__details">
          Details
        </Link>
      </div>
    </div>
  );
}

export default Product;