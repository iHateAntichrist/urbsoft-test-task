import React from 'react';
import './App.scss';
import './styles/font.css';

import { Header } from './components/header/Header';
import { Slider } from './components/slider/Slider';
import { Footer } from './components/footer/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Slider />
      </main>

      <Footer />
    </>
  );
};
