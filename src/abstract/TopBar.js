import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import VisitActions from "../pages/visitList/visitActions";

const TopBar = () => {
	const navigate = useNavigate();
	const name = sessionStorage.getItem("name");
	const token = sessionStorage.getItem("token");
	const dispatch = useDispatch();

	const handleLogOut = () => {
		sessionStorage.removeItem("name");
		sessionStorage.removeItem("token");
		navigate("/");
	};

	const goToMainPaige = () => {
		if (!token) {
			navigate("/");
		} else {
			navigate("/visitList");
		}
	};

	return (
		<div className='header'>
			<div className='header_logo' onClick={goToMainPaige}>
				<h1 className='header_logo-text'>JG-Veterinary</h1>
				<img
					src='https://icons.iconarchive.com/icons/manuel-morillo/dog/128/Dog-3-icon.png'
					width='128'
					height='128'
					alt='dog'
				/>
			</div>
			<div className='header_user'>
				<h1 className='header_user_name'>{name}</h1>
				{token && (
					<button className='header_user_btn btn' onClick={handleLogOut}>
						<i className='icon-logout' />
					</button>
				)}
			</div>
		</div>
	);
};

export default TopBar;
