import React from 'react';

type Props = {
  text: string;
};

export const Button: React.FC<Props> = ({ text }) => {
  return (
    <div className="button__wrapper">
      <div className="button__ellipce"></div>

      <button
        type="button"
        className="button__text"
      >
        {text}
      </button>

      <div className="button__arrow"></div>
    </div>
  );
};
