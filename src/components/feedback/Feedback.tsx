/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

import { Button } from '../button/Button';

export const Feedback: React.FC = () => {
  const [isDataSent, setIsDataSent] = useState(false);

  const submitForm = (values: any, { setSubmitting, resetForm }: any) => {
    axios.post('http://localhost:5000/api/users', values)
      .then(response => {
        console.log('success', response);
        setIsDataSent(true);
        resetForm();
      })
      .catch(error => {
        console.error('fail', error);
        console.log(values);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  useEffect(() => {
    if (isDataSent) {
      const timer = setTimeout(() => {
        setIsDataSent(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isDataSent]);

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
                phone: '',
              }}
              onSubmit={submitForm}
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
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    className="feedback__form-contactus-inputfield"
                    placeholder="Телефон"
                  />
                  {errors.phone && touched.phone && errors.phone}

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

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.4549406636766!2d35.04952472489208!3d48.46698669804588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2c2c60241bd%3A0x999c964048051b3e!2z0JzQntCh0KItQ9C40YLQuA!5e0!3m2!1sru!2sua!4v1694089462921!5m2!1sru!2sua"
              loading="lazy"
              title="map"
              className="feedback__form-contacts-map"
            >
            </iframe>
          </div>
        </div>

        {isDataSent && (
          <div className="feedback__success-message fade-in-out">
            Ваші дані надіслано
          </div>
        )}
      </section>
    </div>
  );
};
