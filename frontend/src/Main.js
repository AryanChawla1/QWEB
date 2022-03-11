import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './pages/App';
import Splash from './pages/Splash';
import Daily from './pages/Daily';

const Main = () => {
   return (
         <Routes>
            <Route exact path='/' element={<Splash />} />
            <Route path = '/classic' element={<App />} />
            <Route path = '/daily' element={<Daily />} />
         </Routes>
   );
}

export default Main;