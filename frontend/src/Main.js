import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Classic from './pages/Classic';
import Splash from './pages/Splash';
import Daily from './pages/Daily';
import CreateAccount from './pages/CreateAccount';
import SignIn from './pages/SignIn';
import VSBot from './pages/VSBot';
import ClassicLB from './pages/ClassicLB';
import DailyLB from './pages/DailyLB';

const Main = () => {
   return (
         <Routes>
            <Route exact path='/' element={<Splash />} />
            <Route path = '/classic' element={<Classic />} />
            <Route path = '/daily' element={<Daily />} />
            <Route path = '/VSBot' element={<VSBot />} />
            <Route path = '/create-account' element={< CreateAccount />} />
            <Route path = '/sign-in' element={< SignIn />} />
            <Route path = '/classic/leaderboard' element={< ClassicLB />} />
            <Route path = '/daily/leaderboard' element={< DailyLB />} />
         </Routes>
   );
}

export default Main;