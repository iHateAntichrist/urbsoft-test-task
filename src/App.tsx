import React from 'react';
import './App.scss';
import './styles/font.css';

import { Header } from './components/header/Header';
import { Slider } from './components/slider/Slider';
import { Catalog } from './components/catalog/Catalog';
import { Footer } from './components/footer/Footer';
import { Feedback } from './components/feedback/Feedback';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Slider />
        <Catalog />
        <Feedback />
      </main>

      <Footer />
    </>
  );
};
