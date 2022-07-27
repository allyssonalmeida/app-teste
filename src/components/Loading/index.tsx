import React from 'react';
import Image from '../../assets/images/pokeball.png';

import './index.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__content">
        <img src={Image} alt="Loading... Please wait" />
        <span>Loading</span>
      </div>
    </div>
  );
}

export default Loading;