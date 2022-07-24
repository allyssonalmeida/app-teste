import React from 'react';
import User from '../../icons/User';

import './index.scss';

const Account: React.FC = () => {
  return (
      <div className="account__wrapper">
        <div className="account__user">
          <User />
          Perfil
        </div>
      </div>
  );
}

export default Account;