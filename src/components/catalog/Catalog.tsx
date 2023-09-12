/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import { ProductCard } from '../productCard/ProductCart';
import { Product } from '../../types/product';
import productsData from '../../api/products';

export const Catalog:React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="wrapper">
      <section className="catalog">
        <div className="catalog__head">
          <h2 className="catalog__head-title">Каталог товаров</h2>
          <p className="catalog__head-subtitle">
            Выбирай своего незаменимого
            <br />
            помощника для приготовления
            <br />
            любого блюда
          </p>
        </div>

        <div className="catalog__main">
          <div className="catalog__main-filters">
            <div>
              <label htmlFor="filter" className="catalog__main-filter">
                Фильтры:
                {' '}
              </label>

              <select id="filter" className="catalog__main-filterselector">
                <option value="all">Все</option>
                <option value="blender">Блендеры</option>
                <option value="kattle">Чайники</option>
                <option value="toster">Тостеры</option>
                <option value="mixer">Миксеры</option>
                <option value="juicer">Соковыжималки</option>
                <option value="cofee-grinder">Кофемолки</option>
                <option value="coffee-machine">Кофемашины</option>
                <option value="meat-grinders">Мясорубки</option>
              </select>
            </div>

            <div>
              <label htmlFor="filter" className="catalog__main-filter">
                Сортировать:
                {' '}
              </label>

              <select id="filter" className="catalog__main-filterselector">
                <option value="all">Все</option>
                <option value="blender">По дате</option>
                <option value="kattle">По цене</option>
              </select>
            </div>
          </div>

          <div className="catalog__list">
            {products.map(prod => (
              <div
                key={prod.id}
                className="card-wrapper"
              >
                <ProductCard
                  image={prod.image}
                  title={prod.title}
                  price={prod.price}
                  isDiscount={prod.isDiscount}
                  newPrice={prod.newPrice}
                  isMain={prod.isMain}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
