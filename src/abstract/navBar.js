// import React from 'react';
// import {Link, NavLink} from "react-router-dom";
//
// const NavBar = () => {
//     return (<div className="header">
//             <div className="header-nav">
//                 <ul className="header-nav-links">
//                     <li className="nav-links-item">
//                         <Link to="/visitList" className="link">Terminarz</Link>
//                     </li>
//                     <li className="nav-links-item">
//                         <Link to="/registration" className="link">Rejestarcja</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div className="header-user">
//                 <h1 className="header-user-name">Name</h1>
//                 <h1 className="header-user-logout">Wyloguj</h1>
//
//             </div>
//         </div>
//
//     );
// };
//
// export default NavBar;
import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="header">
            <div className="header-nav">
                <ul className="header-nav-links">
                    <li className="nav-links-item">
                        <NavLink to="/visitList" className="link" activeClassName="active">Terminarz</NavLink>
                    </li>
                    <li className="nav-links-item">
                        <NavLink to="/registration" className="link" activeClassName="active">Rejestracja</NavLink>
                    </li>
                </ul>
            </div>
            <div className="header-user">
                <h1 className="header-user-name">Name</h1>
                <button className="header-user-btn btn">Wyloguj</button>
            </div>
        </div>
    );
};

export default NavBar;
