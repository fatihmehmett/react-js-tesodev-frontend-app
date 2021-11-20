import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ShowMore from './components/ShowMore';
import MainContextProvider from './context/MainContext';


ReactDOM.render(
  <MainContextProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="showmore" element={<ShowMore />} />
      </Routes>
    </BrowserRouter>
  </MainContextProvider>
  ,
  document.getElementById('root')
);
