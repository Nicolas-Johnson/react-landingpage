import React, { useEffect, useState } from 'react';
import dataContext from './dataContext';

import './App.css';
import Header from './componentes/Header';
import About from './componentes/About';
import Resume from './componentes/Resume';
import Portfolio from './componentes/Portfolio';
import Footer from './componentes/Footer';

export default function App() {
  const [data, setData] = useState({});
  function fetchResume(){
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchResume();
  }, []);

  return (
    <dataContext.Provider value={data}>
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Footer />
      </div>
    </dataContext.Provider>

  );
};
