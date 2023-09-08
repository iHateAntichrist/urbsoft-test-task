import React from 'react';

import { Button } from '../button/Button';

export const Slider: React.FC = () => {
  return (
    <section className="slider">
      <div className="slider__offer">
        <div className="slider__offer-info">
          <h2 className="slider__offer-info-text slider__offer-info-text--top title">
            Погружной блендер
            нового поколения
          </h2>

          <p className="slider__offer-info-text slider__offer-info-text--center">
            Удобство. Комфорт. Качество. Гарантия.
          </p>

          <p className="slider__offer-info-text slider__offer-info-text--bottom">
            Отличный и не заменимый помощник на любой кухне для приготовления
            и воплощения любых кулинарных идей
          </p>

          <p className="slider__offer-info-banner">Новинка  2023 </p>

          <Button text="Узнать больше" />
        </div>

        <div className="slider__offer-info-links">
          <a href="/" className="slider__offer-info-links-link">Facebook</a>
          <a href="/" className="slider__offer-info-links-link">Instagram</a>
        </div>
      </div>

      <div className="slider__photos">
        <div className="slider__photos-wrapper">
          <div className="slider__photos-pagination">
            <div>
              01
              <span className="slider__photos-pagination-part">/05</span>
            </div>

            <div>
              <button
                type="button"
                className="slider__photos-pagination-button slider__photos-pagination-button--left"
              >
                &#8592;
              </button>

              <button
                type="button"
                className="slider__photos-pagination-button slider__photos-pagination-button--right
              slider__photos-pagination-button--active"
              >
                &#8594;
              </button>
            </div>
          </div>

          <div className="slider__photos-photo slider__photos-photo--first"></div>
        </div>

        <div className="slider__photos-wrapper">
          <div className="slider__photos-photo slider__photos-photo--second"></div>
          <div className="slider__photos-description"></div>
        </div>

        <div className="slider__photos-wrapper">
          <div className="slider__photos-photo slider__photos-photo--third"></div>
        </div>
      </div>
    </section>
  );
};
