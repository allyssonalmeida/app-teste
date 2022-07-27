import React from 'react';

interface StatusProps{
  status: { 
    hp: number
    attack: number
    defense: number
    special_attack: number
    special_defense: number
    speed: number
  }
}

const Status: React.FC<StatusProps> = ({status}) => {
  return (
    <div className="stats">
      <strong className="stats__title">Base Status</strong>
      <ul>
        <li className="stats__item">
          <strong>HP:</strong>
          <div style={{ width: status.hp + '%' }} />
        </li>
        <li className="stats__item">
          <strong>Attack:</strong>
          <div style={{ width: status.attack + '%' }} />
        </li>
        <li className="stats__item">
          <strong>defense:</strong>
          <div style={{ width: status.defense + '%' }} />
        </li>
        <li className="stats__item">
          <strong>Special Attack:</strong>
          <div style={{ width: status.special_attack + '%' }} />
        </li>
        <li className="stats__item">
          <strong>Special Defense:</strong>
          <div style={{ width: status.special_defense + '%' }} />
        </li>
        <li className="stats__item">
          <strong>Speed:</strong>
          <div style={{ width: status.speed + '%' }} />
        </li>
      </ul>
    </div>
  );
}

export default Status;