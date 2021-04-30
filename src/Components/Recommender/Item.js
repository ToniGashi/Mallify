import React from 'react';
import '../Recommender/recommender.css';

const Item = ({name, price, img}) => {
	return (
		<div className='pic'>
			<img alt='' src={img} className="grid-item grid-item-2 imgA"/>
			<div>
				<h2> {name} </h2>
				<p> Price: ${price} </p>
			</div>
		</div>
	);
}

export default Item;