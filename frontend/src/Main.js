import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Classic from './pages/Classic';
import Splash from './pages/Splash';
import Daily from './pages/Daily';
import CreateAccount from './pages/CreateAccount'
import VSBot from './pages/VSBot';

const Main = () => {
   return (
         <Routes>
            <Route exact path='/' element={<Splash />} />
            <Route path = '/classic' element={<Classic />} />
            <Route path = '/daily' element={<Daily />} />
            <Route path = '/VSBot' element={<VSBot />} />
            <Route path = '/create-account' element={< CreateAccount/>} />
         </Routes>
   );
}

export default Main;