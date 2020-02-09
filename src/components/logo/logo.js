import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import project from './project.jpg';

const Logo = () => 
{
	return(
		<div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 		<div className="Tilt-inner"> <img alt='logo' src={project}/></div>
		</Tilt>
		</div>

		)
	
}

export default Logo;
