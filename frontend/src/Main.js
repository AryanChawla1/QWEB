import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/App';
import Splash from './pages/Splash';

const Main = () => {
   return (
         <Routes>
            <Route exact path='/' element={<App />} />
            <Route path = '/splash' element={<Splash />} />
         </Routes>
   );
}

export default Main;