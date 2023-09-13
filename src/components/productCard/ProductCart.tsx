import React from 'react';

type Props = {
  image: string;
  title: string;
  price: string | null;
  isDiscount: boolean;
  newPrice: string | null;
  isMain: boolean;
};

export const ProductCard: React.FC<Props> = ({
  image,
  title,
  price,
  isDiscount,
  newPrice,
  isMain,
}) => {
  const cardImageClass = isMain ? 'card__image--main' : 'card__image';
  const cardClass = isMain ? 'card--main' : 'card';
  const mainWrapperClass = isMain
    ? 'card-image-wrapper--main'
    : 'card__image-wrapper';
  const cardDiscount = isDiscount ? 'discount' : '';

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={`${cardClass} ${cardDiscount}`}>
      <div className={mainWrapperClass}>
        {/* <img
          src={image}
          alt={title}
          className={cardImageClass}
        /> */}

        <div
          className={cardImageClass}
          style={backgroundImageStyle}
        >
        </div>
      </div>

      <div className="card__wrapper">
        <div className="card__title">{title}</div>
        {isDiscount ? (
          <div className="card__price--newprice">
            <div className="card__price--newprice-old">{price}</div>
            {' '}
            <div className="card__price--newprice-new">{newPrice}</div>
          </div>
        ) : (
          <div className="card__price">{price}</div>
        )}
      </div>
    </div>
  );
};
