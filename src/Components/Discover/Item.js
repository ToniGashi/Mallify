import React from 'react';
import '../Discover/discover.css';

const Item = ({name, price, img}) => {
	return (
		<div className='pic2'>
			<img alt='' src={img} className="grid-item grid-item-2 imgA2"/>
			<div>
				<h2> {name} </h2>
				<p> Price: ${price} </p>
			</div>
		</div>
	);
}

export default Item;