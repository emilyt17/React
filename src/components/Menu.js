import React from "react";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget.js";


export default function Menu() {
   return ( 
   <div>
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		
		<div className="container-fluid">
			<Link to={`/`}className="navbar-brand" href="#">EMYT+</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse " id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">	
					<li className="nav-item">
						<NavLink to={`category/zapatos`} className="nav-link active" aria-current="page" href="#">Zapatos</NavLink>
					</li>
					<li  className="nav-item">
						<NavLink to={`category/indumentaria`} className="nav-link active" aria-current="page" href="#">Indumentaria</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={`category/sale`} className="nav-link active" aria-current="page" href="#">Sale</NavLink>
					</li>
					<li className="nav-item">
					<NavLink to={`/cart`} className="nav-link active" aria-current="page" href="#">
					<CartWidget className="nav-link active p-3" aria-current="page" href="#"/>
					</NavLink>
					</li>

				</ul>
			</div>
		</div>
	</nav>
   </div>
   )
};
