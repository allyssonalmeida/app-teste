import React from 'react';
import { Link } from 'react-router-dom';
import'./index.scss';

interface BreadcrumbType {
  product: string
}

const Breadcrumb: React.FC<BreadcrumbType> = ({product}) => {
  return (
    <div className="breadcrumb"> 
      <Link to='/'>
        Home
      </Link>
      &gt;
      <span>{product}</span>
    </div>
  );
}

export default Breadcrumb;