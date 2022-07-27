import React from 'react';

interface imageProps {
  url: string | undefined,
  alt: string | undefined
}
const Image: React.FC<imageProps> = ({url, alt}) => {
  return (
    <section className="product__image">
      <div className="product__frame">
        <img src={url} alt={alt} />
      </div>
    </section>
  );
}

export default Image;