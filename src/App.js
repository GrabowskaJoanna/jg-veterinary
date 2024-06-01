import React from 'react';
import './App.css';
import LoginForm from "./pages/login/loginForm";
import VisitList from "./pages/visitList/visitList";
import Registration from "./pages/newRegistrationForm/registration";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/visitList" element={<VisitList/>}/>
                    <Route path="/registration" element={<Registration/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App;



