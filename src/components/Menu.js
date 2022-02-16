import React from "react";
import CartWidget from "./CartWidget.js";


export default function Menu() {
   return ( 
   <div>
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<a className="navbar-brand" href="#">EMYT+</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse " id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item ">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
					</li>	
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Zapatos</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Indumentaria</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Sale</a>
					</li>
					<li className="nav-item">
					<CartWidget className="nav-link active p-3" aria-current="page" href="#"/>
					</li>

				</ul>
			</div>
		</div>
	</nav>
   </div>
   )
};
