import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './pages/App';
import Splash from './pages/Splash';
import Daily from './pages/Daily';
import CreateAccount from './pages/CreateAccount'

const Main = () => {
   return (
         <Routes>
            <Route exact path='/' element={<Splash />} />
            <Route path = '/classic' element={<App />} />
            <Route path = '/daily' element={<Daily />} />
            <Route path = '/create-account' element={< CreateAccount/>} />
         </Routes>
   );
}

export default Main;