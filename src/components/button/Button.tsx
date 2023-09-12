import React from 'react';

type Props = {
  text: string;
  onSubmit?: () => void;
};

export const Button: React.FC<Props> = ({ text, onSubmit }) => {
  const handleClick = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="button__wrapper">
      <div className="button__ellipce"></div>

      <button
        type="submit"
        className="button__text"
        onClick={handleClick}
      >
        {text}
      </button>

      <div className="button__arrow"></div>
    </div>
  );
};
