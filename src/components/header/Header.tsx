import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="nav-panel">
        <div className="nav-panel__search">
          <div className="nav-panel__search-logo"></div>

          <div className="nav-panel__search-wrapper">
            <input
              type="text"
              className="nav-panel__search-searchbar"
              placeholder="Ваш запрос"
            />

            <div className="nav-panel__search-icon"></div>
          </div>
        </div>

        <nav className="nav-panel__navigation">
          <ul className="nav-panel__navigation-list">
            <li className="nav-panel__navigation-item">O компании</li>
            <li className="nav-panel__navigation-item">Каталог</li>
            <li className="nav-panel__navigation-item">Новинки</li>
            <li className="nav-panel__navigation-item">Акции</li>
            <li className="nav-panel__navigation-item">Контакты</li>
          </ul>

          <div className="nav-panel__contacts">
            <div className="nav-panel__contacts-phoneicon"></div>
            <p className="nav-panel__contacts-phonenumber">
              +38 (097) 466 31 90
            </p>
            <div className="nav-panel__contacts-bag"></div>
            <div className="nav-panel__contacts-user"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};
