/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import { Formik } from 'formik';

import { Button } from '../button/Button';

export const Feedback: React.FC = () => {
  return (
    <div className="wrapper">
      <section className="feedback">
        <div className="feedback__subscribe">
          <div>
            <h2 className="feedback__subscribe-title">
              Хотите быть в курсе всех
              <br />
              самых послених новинок
              <br />
              в мире бытовой технике?
            </h2>

            <p className="feedback__subscribe-subtitle">
              Уверяем Вас, никакого спама - только по делу
            </p>
          </div>

          <form action="post" className="feedback__subscribe-form">
            <div className="feedback__subscribe-form-wrapper">
              <input
                type="email"
                placeholder="Введите Ваш email"
                className="feedback__subscribe-form-input"
              />

              <div className="feedback__subscribe-formicon"></div>
            </div>

            <Button text="Подписаться" />
          </form>
        </div>

        <div className="feedback__form">
          <div className="feedback__form-contactus-wrapper">
            <p className="feedback__form-contactus-title">Запит пропозицій</p>

            <Formik
              initialValues={{
                name: '',
                email: '',
                phoneNumber: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className="feedback__form-contactus">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="feedback__form-contactus-inputfield"
                    placeholder="Имя"
                  />
                  {errors.name && touched.name && errors.name}
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="feedback__form-contactus-inputfield"
                    placeholder="Почта"
                  />
                  {errors.email && touched.email && errors.email}

                  <input
                    type="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    className="feedback__form-contactus-inputfield"
                    placeholder="Телефон"
                  />
                  {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}

                  <Button
                    text="Заказать звонок"
                  />
                </form>
              )}
            </Formik>
          </div>

          <div className="feedback__form-contacts">
            <div className="feedback__form-contacts-wrapper">
              <h2 className="feedback__form-contacts-title">
                Мы всегда Вам рады
              </h2>

              <div className="feedback__form-contacts-phone">
                <div className="feedback__block-wrapper">
                  <p className="feedback__form-subtitle">Сязаться с нами:</p>

                  <div className="feedback__form-link-block">
                    <div className="feedback__form-contacts-phoneicon icon"></div>

                    <a
                      href="+38 (097) 466 31 90"
                      className="feedback__form-contacts-link"
                    >
                      +38 (097) 466 31 90
                    </a>
                  </div>
                </div>

                <div className="feedback__block-wrapper">
                  <p className="feedback__form-subtitle">Написать:</p>

                  <div className="feedback__form-link-block">
                    <div className="feedback__form-contacts-emailicon icon"></div>

                    <a
                      href="info@mir.electro.com"
                      className="feedback__form-contacts-link"
                    >
                      info@mir.electro.com
                    </a>
                  </div>
                </div>

                <div className="feedback__block-wrapper">
                  <p className="feedback__form-subtitle">Всегда быть в курсе:</p>

                  <div className="feedback__medias-linkswrapper">
                    <a className="feedback__medias-links" href="/">Facebook</a>
                    <a className="feedback__medias-links" href="/">Instagram</a>
                  </div>
                </div>

                <div className="feedback__block-wrapper">
                  <p className="feedback__form-subtitle">Или заходите в гости:</p>

                  <div className="feedback__form-link-block">
                    <div className="feedback__form-contacts-locationicon icon"></div>

                    <p className="feedback__form-contacts-link">
                      г. Днепр, ул. Глинки 2,
                      <br />
                      ТРЦ “Мост-Сити”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="feedback__form-contacts-map"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
