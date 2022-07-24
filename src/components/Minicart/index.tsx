import React, { Fragment } from 'react';
import MinicartIcon from '../../icons/Minicart';
import Sidebar from './components/Sidebar';
import './index.scss';

const Minicart: React.FC = () => {
  const [openCart, setOpenCart] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(0);

  return (
    <Fragment>
      <div className="minicart">
        <button className="minicart__button" onClick={() => {
          setOpenCart(!openCart)
        }}>
          <MinicartIcon />
          <div className="minicart__badge">
            {cartItems}
          </div>
        </button>
      </div>
      { openCart && <Sidebar />}
    </Fragment>
  );
}

export default Minicart;