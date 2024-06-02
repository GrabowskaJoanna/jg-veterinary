import React from 'react';

import LoginForm from "./pages/login/LoginForm";
import VisitList from "./pages/visitList/VisitList";
import Registration from "./pages/newRegistrationForm/Registration";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="/visitList" element={<VisitList/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App;



