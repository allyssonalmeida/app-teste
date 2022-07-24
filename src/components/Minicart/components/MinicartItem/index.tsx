import React from 'react';
import Trash from '../../../../icons/Trash';

const MinicartItem: React.FC = () => {
  return (
    <div className="minicart__item">
      <div className="minicart__img">
        <img src="" alt="imagem" />
      </div>
      <div className="minicart__content">
        <div className="minicart__title">
          <strong>Charmander</strong>
          <span className="shiny">Normal</span>
        </div>
        <div className="minicart__total">
          R$ 199,00
        </div>
      </div>
      <div className="minicart__selector">
        <button>-</button>
        <input type="number" value="0" />
        <button>+</button>
      </div>
      <button className="minicart__trash">
        <Trash />
      </button>
    </div>
  );
}

export default MinicartItem;