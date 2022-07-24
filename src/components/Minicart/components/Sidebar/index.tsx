import React from 'react';
import MinicartItem from '../MinicartItem';

import './index.scss';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar active">
      <div className="sidebar__overlay">
        <div className="sidebar__wrapper">
          <div className="sidebar__title">
            <button>&times;</button>
            <h1>Meu Carrinho</h1>
          </div>
          <div className="sidebar__content">
            <MinicartItem />
          </div>
          <div className="sidebar__footer">
            <ul>
              <li>
                <strong>Subtotal</strong>
                <span>R$ 199,00</span>
              </li>
              <li>
                <strong>Total</strong>
                <span>R$ 199,00</span>
              </li>
            </ul>
            <button>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;