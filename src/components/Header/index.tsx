import React from 'react';
import Account from '../Account';
import Minicart from '../Minicart';
import Search from '../Search';
import Logo from '../ui/Logo';
import './index.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__search">
          <Search />
        </div>
        <div className="header__account">
          <Account />
          <Minicart />
        </div>
      </div>
      <div className="header__menu">
        <nav className="nav">
          <a href="/eletricos" className="nav__item">
            Elétricos
          </a>
          <a href="/eletricos" className="nav__item">
            Elétricos
          </a>
          <a href="/eletricos" className="nav__item">
            Elétricos
          </a>
          <a href="/eletricos" className="nav__item">
            Elétricos
          </a>
          <a href="/eletricos" className="nav__item">
            Elétricos
          </a>
          <a href="/eletricos" className="nav__item">
            Elétricos
          </a>
          <a href="/eletricos" className="nav__item">
            Elétricos
          </a>
          <a href="/eletricos" className="nav__item">
            Elétricos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;